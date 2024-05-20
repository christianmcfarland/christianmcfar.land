<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white">
      <q-toolbar class="absolute-top">
        <q-toolbar-title>
          <q-btn
            class="btn--no-hover q-pa-none"
            :ripple="false"
            flat
            size="lg"
            no-caps
            to="/"
          >
            Christian McFarland
          </q-btn>
        </q-toolbar-title>
        <HamburgerMenu />
      </q-toolbar>
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
import HamburgerMenu from 'src/components/HamburgerMenu.vue';
</script>

<style scoped lang="scss">
:deep(.q-btn.btn--no-hover .q-focus-helper) {
  display: none;
}
</style>
