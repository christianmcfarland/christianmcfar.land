<template>
  <q-btn flat round dense icon="menu">
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item to="/resume" clickable v-close-popup>
          <q-item-section>Resume</q-item-section>
        </q-item>
        <q-item to="/charters" clickable v-close-popup>
          <q-item-section>Off We Go</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
