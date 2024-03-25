<template>
  <q-carousel animated v-model="slide" navigation infinite class="my-carousel">
    <q-carousel-slide :name="1" class="q-pa-none relative">
      <video class="my-video absolute-center" autoplay loop muted>
        <source src="~src/assets/highlight-movie.mp4" type="video/mp4" />
      </video>
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="3">
      <img
        class="my-image absolute-center"
        src="~src/assets/ainsleys-angels.jpg"
      />
    </q-carousel-slide>
    <q-carousel-slide class="q-pa-none relative" :name="2">
      <img
        class="my-image absolute-center"
        src="~src/assets/masonboro-ai.webp"
      />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const slide = ref(1);
const intervalId = ref();

const advanceSlide = () => {
  if (slide.value === 3) {
    slide.value = 1;
  } else {
    slide.value++;
  }
};

onMounted(() => {
  intervalId.value = setInterval(advanceSlide, 10000000);
});
</script>

<style lang="scss" scoped>
.my-carousel {
  @media (max-width: $breakpoint-xs-max) {
    height: 520px;
  }
  height: 752px;
}

.my-video {
  filter: brightness(75%);
  @media (max-width: $breakpoint-sm-max) {
    height: 100%;
  }
  @media (min-width: $breakpoint-md-max) {
    width: 100%;
  }
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
