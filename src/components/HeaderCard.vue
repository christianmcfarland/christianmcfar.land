<template>
  <q-toolbar class="header-toolbar q-px-md q-py-sm">
    <a class="brand text-h6" href="/">Christian McFarland</a>

    <div class="desktop-nav row items-center">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>

    <q-space />

    <ResumeDownloadBtn />
  </q-toolbar>
</template>

<script setup lang="ts">
import ResumeDownloadBtn from 'src/components/ResumeDownloadBtn.vue';
</script>

<style scoped lang="scss">
.header-toolbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(12, 21, 35, 0.85);
  backdrop-filter: blur(6px);
}

.brand {
  color: #f5f7fa;
  text-decoration: none;
  font-family: 'roboto-semibold';
}

.desktop-nav a {
  color: #c8d5e3;
  text-decoration: none;
  font-family: 'roboto-medium';
  font-size: 0.9rem;
}

.desktop-nav {
  gap: 1rem;
  margin-left: 1rem;
}

.desktop-nav a:hover {
  color: #ffffff;
}

@media (max-width: 740px) {
  .desktop-nav {
    display: none;
  }
}
</style>
