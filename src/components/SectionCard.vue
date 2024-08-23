<template>
  <q-card flat :bordered="bordered" class="section-card q-ma-sm">
    <q-card-section>
      <img class="full-width" :src="`/${imageName}`" />
    </q-card-section>
    <q-card-section v-if="content">
      <p>{{ content }}</p>
    </q-card-section>
    <q-card-section v-if="link && linkText">
      <q-btn outline target="_blank" :href="link">{{ linkText }}</q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Section } from 'src/types';
defineProps<Section>();
</script>

<style scoped lang="scss">
.section-card {
  max-width: 800px;
}
</style>
