<template>
  <div
    class="logo-text-wrapper flex column items-center justify-center q-pa-lg q-gutter-md"
  >
    <div class="logo-wrapper">
      <slot></slot>
    </div>
    <div class="text-wrapper">
      <p class="text-h5">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<style scoped lang="scss">
.logo-wrapper {
  height: 100px;
}
</style>
