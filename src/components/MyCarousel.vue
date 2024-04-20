<template>
  <q-carousel
    animated
    v-model="slide"
    @update:model-value="handleClearInterval"
    navigation
    infinite
    class="my-carousel"
  >
    <q-carousel-slide class="q-pa-none relative" :name="1">
      <img
        class="my-image absolute-center"
        src="~src/assets/ainsleys-angels.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="q-pa-none relative">
      <img
        class="my-image absolute-center"
        src="~src/assets/boat-masonboro.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="3">
      <img
        class="my-image absolute-center"
        src="~src/assets/masonboro-footsteps.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="4">
      <img
        class="my-image absolute-center"
        src="~src/assets/carolina-beach.jpg"
      />
    </q-carousel-slide>
  </q-carousel>
  <p class="text-center text-caption text-italic">{{ captionText }}</p>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const slide = ref(1);
const intervalId = ref();

const advanceSlide = () => {
  if (slide.value === 4) {
    slide.value = 1;
  } else {
    slide.value++;
  }
};

const handleClearInterval = () => {
  clearInterval(intervalId.value);
};

const captionText = computed(() => {
  switch (slide.value) {
    case 1:
      return 'Miracles in Motion 5k - Saturday, March 25, 2023';
    case 2:
      return 'Masonboro Island, North Carolina';
    case 3:
      return 'Masonboro Island, North Carolina';
    case 4:
      return 'Carolina Beach, North Carolina';
    default:
      return '';
  }
});

onMounted(() => {
  intervalId.value = setInterval(advanceSlide, 1000 * 4);
});

onUnmounted(() => {
  handleClearInterval();
});
</script>

<style lang="scss" scoped>
.my-carousel {
  @media (max-width: $breakpoint-xs-max) {
    height: 520px;
  }
  height: 752px;
}

.overlay-text {
  position: absolute;
  bottom: 0;
  right: $space-base;
  z-index: 99;
}

.my-image {
  filter: brightness(75%);
  @media (max-width: $breakpoint-xs-max) {
    height: 100%;
  }
  @media (min-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
