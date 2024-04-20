<template>
  <q-page>
    <MyCarousel />
    <div class="logo-section-wrapper flex justify-between items-center">
      <LogoText class="col" text="Senior Software Engineer">
        <VueLogo />
      </LogoText>
      <LogoText class="col" text="USCG Licensed Captain">
        <UscgLogo />
      </LogoText>
      <LogoText class="col" text="Multisport Athlete">
        <TriLogo />
      </LogoText>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LogoText from 'src/components/LogoText.vue';
import MyCarousel from 'src/components/MyCarousel.vue';
import UscgLogo from 'src/components/UscgLogo.vue';
import VueLogo from 'src/components/VueLogo.vue';
import TriLogo from 'src/components/TriLogo.vue';
</script>

<style scoped lang="scss">
.logo-section-wrapper {
  @media (max-width: $breakpoint-xs-max) {
    flex-direction: column;
  }
}
</style>
