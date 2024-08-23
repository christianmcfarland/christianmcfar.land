<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white">
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
