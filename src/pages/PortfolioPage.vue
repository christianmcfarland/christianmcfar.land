<template>
  <q-page class="site-page">
    <section class="hero content-wrap">
      <p class="eyebrow">Portfolio</p>
      <h1>Custom WordPress plugins for {{ portfolioClient }}</h1>
      <p class="hero-copy">
        A suite of custom WordPress plugins, written in PHP, that power
        {{ portfolioClient }}'s member platform: an AI assistant, personalized
        programs, on-site booking, and a member health profile.
      </p>
      <nav class="project-links" aria-label="Projects">
        <a
          v-for="project in portfolioProjects"
          :key="project.slug"
          class="category-pill"
          :href="`#${project.slug}`"
        >
          {{ project.title }}
        </a>
      </nav>
    </section>

    <section class="content-wrap section">
      <div class="project-list">
        <q-card
          v-for="project in portfolioProjects"
          :id="project.slug"
          :key="project.slug"
          flat
          bordered
          class="snapshot-card project-card"
        >
          <q-card-section>
            <h2 class="q-mb-sm">{{ project.title }}</h2>
            <p class="project-summary q-ma-none">{{ project.summary }}</p>
          </q-card-section>

          <q-card-section
            v-if="project.screenshots?.length"
            class="q-pt-none"
          >
            <div class="screenshot-grid">
              <img
                v-for="shot in project.screenshots"
                :key="shot.src"
                :src="shot.src"
                :alt="shot.alt"
                loading="lazy"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <h3 class="project-heading">The challenge</h3>
            <p>{{ project.challenge }}</p>

            <h3 class="project-heading">What I built</h3>
            <p v-for="paragraph in project.built" :key="paragraph">
              {{ paragraph }}
            </p>

            <h3 class="project-heading">Technical highlights</h3>
            <ul class="bullet-list">
              <li v-for="highlight in project.highlights" :key="highlight">
                {{ highlight }}
              </li>
            </ul>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row chip-row">
              <q-chip
                v-for="tech in project.stack"
                :key="`${project.slug}-${tech}`"
                dense
                square
                color="blue-grey-10"
                text-color="grey-3"
              >
                {{ tech }}
              </q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <section class="content-wrap section section-last">
      <h2>Let's work together</h2>
      <p>Interested in something similar? I'd be glad to talk.</p>
      <div class="row cta-row">
        <q-btn
          href="mailto:christianmcfarland@gmail.com"
          color="secondary"
          unelevated
          no-caps
          label="Email Me"
        />
        <q-btn
          href="/resume.pdf"
          target="_blank"
          outline
          color="grey-3"
          no-caps
          label="Download Resume"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import {
  portfolioClient,
  portfolioProjects,
} from 'src/constants/siteContent';
</script>

<style scoped lang="scss">
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.project-list {
  display: grid;
  gap: 1.2rem;
}

.project-summary {
  color: #c8d5e3;
  max-width: 75ch;
}

.project-heading {
  font-family: 'roboto-semibold';
  font-size: 0.95rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
  color: #7fa4c8;
  margin: 1.2rem 0 0.5rem;
}

.project-heading:first-child {
  margin-top: 0;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.75rem;

  img {
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgba(151, 181, 211, 0.22);
  }
}
</style>
