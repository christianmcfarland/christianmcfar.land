<template>
  <q-page padding class="bg-dark">
    <q-page-container class="q-mt-xl">
      <h2 class="text-white">Resume</h2>
      <q-card class="q-mt-lg">
        <q-btn
          href="src/assets/resume.pdf"
          download="Christian-McFarland-Resume-2024"
          target="_blank"
          icon="picture_as_pdf"
          class="full-width"
          >Download .pdf</q-btn
        >
      </q-card>
      <q-card class="q-mt-md">
        <q-btn
          href="src/assets/resume.txt"
          download="Christian-McFarland-Resume-2024"
          target="_blank"
          icon="description"
          class="full-width"
          >Download .txt</q-btn
        >
      </q-card>
      <q-card class="q-mt-md">
        <img width="100%" src="~src/assets/resume.jpg" />
      </q-card>
    </q-page-container>
  </q-page>
</template>

<style scoped lang="scss">
h2 {
  margin: 0;
}
</style>
