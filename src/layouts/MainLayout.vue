<template>
  <q-layout view="hHh lpR fFf" class="site-layout">
    <q-header class="text-white" elevated>
      <HeaderCard />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <FooterCard />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import FooterCard from 'src/components/FooterCard.vue';
import HeaderCard from 'src/components/HeaderCard.vue';
</script>

<style scoped lang="scss">
.site-layout {
  background:
    radial-gradient(circle at 20% 0%, #1b3655 0%, rgba(27, 54, 85, 0) 40%),
    radial-gradient(circle at 85% 10%, #2a4a68 0%, rgba(42, 74, 104, 0) 30%),
    #0b1421;
}
</style>
