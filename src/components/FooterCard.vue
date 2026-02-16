<template>
  <q-card flat square class="footer-wrap">
    <q-card-section class="row items-center justify-between footer-section">
      <div class="row items-center footer-brand">
        <img
          src="/cm-logo-mark.svg"
          alt="CM logo"
          class="footer-logo"
        />
        <div class="text-overline footer-copy">
          &copy; 2026 Christian McFarland
        </div>
      </div>
      <div class="row items-center footer-links">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christian-mcfarland-98a18965"
          aria-label="LinkedIn"
        >
          <q-icon color="grey-4" size="sm" name="fa-brands fa-linkedin" />
        </a>
        <a
          target="_blank"
          href="https://github.com/christianmcfarland"
          aria-label="GitHub"
        >
          <q-icon color="grey-4" size="sm" name="fa-brands fa-github" />
        </a>
        <a
          target="_blank"
          href="mailto:christianmcfarland@gmail.com"
          aria-label="Email"
        >
          <q-icon color="grey-4" size="sm" name="fa-solid fa-envelope" />
        </a>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-wrap {
  background: #0e1827;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-copy {
  color: #9fb2c7;
}

.footer-section {
  gap: 0.5rem;
}

.footer-brand {
  gap: 0.6rem;
}

.footer-logo {
  width: 28px;
  height: 28px;
  display: block;
}

.footer-links {
  gap: 1rem;
}

a {
  text-decoration: none;
}

@media (max-width: 520px) {
  .footer-logo {
    width: 24px;
    height: 24px;
  }
}
</style>
