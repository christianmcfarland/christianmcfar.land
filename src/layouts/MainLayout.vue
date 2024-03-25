<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Title </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/resume" label="Resume" />
      </q-tabs>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-card flat>
        <q-card-section class="column">
          <a href="www.linkedin.com/in/christian-mcfarland-98a18965"
            >LinkedIn</a
          >
          <a href="www.linkedin.com/in/christian-mcfarland-98a18965"
            >LinkedIn</a
          >
        </q-card-section>
      </q-card>
    </q-footer>
  </q-layout>
</template>
