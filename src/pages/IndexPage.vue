<template>
  <q-page class="column items-center">
    <template v-for="section in sections" :key="section.imageName">
      <SectionCard v-bind="section" />
    </template>
  </q-page>
</template>

<script setup lang="ts">
import SectionCard from 'src/components/SectionCard.vue';
import { sections } from 'src/constants/sections';
</script>

<style scoped lang="scss"></style>
