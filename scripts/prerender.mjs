// Pre-renders the built SPA so crawlers, link previews, and no-JS visitors
// get real HTML. Runs automatically after `npm run build` (postbuild).
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import puppeteer from 'puppeteer';

const distDir = join(process.cwd(), 'dist', 'spa');

// Route -> output file. Non-root routes are written as `<name>.html` and
// served at `/<name>` via `cleanUrls` in firebase.json.
const routes = {
  '/': 'index.html',
  '/portfolio': 'portfolio.html',
};

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

// Keep the original shell in memory so every route renders from it, even
// after index.html is overwritten.
const shell = readFileSync(join(distDir, 'index.html'));

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const filePath = normalize(join(distDir, urlPath));
  const isFile =
    filePath.startsWith(distDir) && existsSync(filePath) && statSync(filePath).isFile();

  if (isFile && urlPath !== '/index.html') {
    res.writeHead(200, {
      'Content-Type': contentTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    res.end(readFileSync(filePath));
    return;
  }

  res.writeHead(200, { 'Content-Type': contentTypes['.html'] });
  res.end(shell);
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;

const browser = await puppeteer.launch({
  args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});

try {
  const rendered = {};

  for (const route of Object.keys(routes)) {
    const page = await browser.newPage();
    await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
    await page.waitForSelector('.site-page');

    const html = await page.content();
    // Quasar adds platform classes (desktop, no-touch, ...) to <body> at
    // runtime; drop them so mobile visitors don't start with desktop classes.
    rendered[route] = html.replace(/<body[^>]*>/, '<body>');
    await page.close();
  }

  for (const [route, file] of Object.entries(routes)) {
    writeFileSync(join(distDir, file), rendered[route]);
    console.log(`Pre-rendered ${route} -> dist/spa/${file}`);
  }
} finally {
  await browser.close();
  server.close();
}
