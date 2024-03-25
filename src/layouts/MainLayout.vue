<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white">
      <q-toolbar class="absolute-top">
        <q-toolbar-title> christianmcfar.land </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <FooterCard />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import FooterCard from 'src/components/FooterCard.vue';
</script>
