<template>
  <q-carousel
    animated
    arrows
    class="my-carousel"
    infinite
    swipeable
    v-model="slide"
    @update:model-value="handleClearInterval"
  >
    <q-carousel-slide class="q-pa-none relative" :name="1">
      <img
        class="my-image absolute-center"
        src="~src/assets/ainsleys-angels.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="q-pa-none relative">
      <img class="my-image absolute-center" src="~src/assets/havoc-boat.jpg" />
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="3">
      <img
        class="my-image absolute-center"
        src="~src/assets/havoc-closeup.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="4">
      <img
        class="my-image absolute-center"
        src="~src/assets/camping-masonboro.jpg"
      />
    </q-carousel-slide>
  </q-carousel>
  <p class="caption-text text-center text-caption text-italic text-white">
    {{ captionText }}
  </p>
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
      return 'Wrightsville Beach, North Carolina';
    case 3:
      return 'Havoc, German Shepherd';
    case 4:
      return 'Masonboro Island, North Carolina';
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

.my-image {
  filter: brightness(75%);
  @media (max-width: $breakpoint-xs-max) {
    height: 100%;
  }
  @media (min-width: $breakpoint-sm-max) {
    width: 100%;
  }
}

.caption-text {
  font-size: 1rem;
  position: relative;
  top: -35px;
}
</style>
