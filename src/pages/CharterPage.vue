<template>
  <q-page padding class="skinny-page bg-dark">
    <q-page-container class="q-mt-xl">
      <h2 class="text-white">Off We Go</h2>
      <!-- <q-card class="q-mt-lg">
        <q-btn
          target="_blank"
          href="https://www.getmyboat.com/trips/MYL4AjxY/"
          icon="schedule"
          class="full-width"
          >Request Charter</q-btn
        >
      </q-card> -->
      <q-card class="q-mt-md">
        <img width="100%" src="~src/assets/dad-boat.jpg" />
      </q-card>
      <div class="lt-sm text-white q-mt-md">{{ content }}</div>
      <div class="gt-sm text-white q-mt-md text-h6">{{ content }}</div>

      <q-card class="q-mt-md">
        <img width="100%" src="~src/assets/off-we-go.jpg" />
      </q-card>
      <q-card class="q-mt-lg">
        <q-btn
          target="_blank"
          href="https://www.getmyboat.com/trips/MYL4AjxY/"
          icon="schedule"
          class="full-width"
          >Request Charter</q-btn
        >
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script setup lang="ts">
const content = `My Dad spent the last two years of his life wheelchair bound, and while
        they could stop him from walking, they could never stop him from
        exploring. We had many grand adventures together, including several
        right here on this boat. And before every journey, he would always shout
        "Off We Go!" My mission is to serve all those who long to be on the
        water, exploring and creating lasting memories.`;
</script>

<style scoped lang="scss">
h2 {
  margin: 0;
}
</style>
