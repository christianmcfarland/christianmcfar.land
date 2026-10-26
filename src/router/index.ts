import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const setHeadAttr = (selector: string, attr: string, value: string): void => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: (to) =>
      to.hash
        ? { el: to.hash, top: 72, behavior: 'smooth' }
        : { left: 0, top: 0 },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.afterEach((to) => {
    if (process.env.SERVER) return;

    const title = to.meta.title as string | undefined;
    const description = to.meta.description as string | undefined;
    const url = `https://christianmcfar.land${to.path}`;

    if (title) {
      document.title = title;
      setHeadAttr('meta[property="og:title"]', 'content', title);
    }
    if (description) {
      setHeadAttr('meta[name="description"]', 'content', description);
      setHeadAttr('meta[property="og:description"]', 'content', description);
    }
    setHeadAttr('meta[property="og:url"]', 'content', url);
    setHeadAttr('link[rel="canonical"]', 'href', url);
  });

  return Router;
});
