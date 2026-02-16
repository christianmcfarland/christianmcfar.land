<template>
  <q-page class="portfolio-page">
    <section class="hero content-wrap">
      <p class="eyebrow">Web Developer</p>
      <h1>
        Building practical web products that solve real workflow problems.
      </h1>
      <p class="hero-copy">
        Full-stack developer with 9+ years building and shipping web
        applications and internal tools across healthcare and B2B SaaS. Strong
        in API design and modern front ends, with a focus on clarity,
        performance, and maintainability.
      </p>
      <div class="row cta-row">
        <q-btn
          href="#projects"
          color="secondary"
          unelevated
          no-caps
          label="View Projects"
        />
        <q-btn
          href="https://github.com/christianmcfarland"
          target="_blank"
          outline
          color="grey-3"
          no-caps
          label="GitHub"
        />
        <q-btn
          href="https://www.linkedin.com/in/christian-mcfarland-98a18965"
          target="_blank"
          outline
          color="grey-3"
          no-caps
          label="LinkedIn"
        />
      </div>
    </section>

    <section id="projects" class="content-wrap section">
      <h2>Featured Projects</h2>
      <div class="project-grid">
        <q-card
          v-for="project in featuredProjects"
          :key="project.name"
          flat
          bordered
          class="project-card"
        >
          <q-card-section>
            <div class="row items-center justify-between project-head">
              <h3 class="text-h6 q-ma-none">{{ project.name }}</h3>
              <!-- <q-badge color="secondary" :label="project.status" /> -->
            </div>
          </q-card-section>

          <q-card-section>
            <p>{{ project.description }}</p>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row chip-row">
              <q-chip
                v-for="item in project.stack"
                :key="`${project.name}-${item}`"
                dense
                square
                color="blue-grey-10"
                text-color="grey-3"
              >
                {{ item }}
              </q-chip>
            </div>
          </q-card-section>

          <q-card-actions class="q-pa-md q-pt-none">
            <q-btn
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              color="secondary"
              unelevated
              no-caps
              label="Live Link"
            />
            <q-btn
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              flat
              color="grey-4"
              no-caps
              label="Code"
            />
            <span v-if="!project.liveUrl" class="muted-text">
              Live link to be added
            </span>
          </q-card-actions>
        </q-card>
      </div>
    </section>

    <section id="skills" class="content-wrap section">
      <h2>Core Skills</h2>
      <div
        class="skills-categories"
        @mouseleave="setHoveredSkillCategory(null)"
      >
        <button
          v-for="group in skillGroups"
          :key="group.title"
          class="category-pill"
          type="button"
          :class="{
            'category-pill--active': hoveredSkillCategory === group.title,
          }"
          @mouseenter="setHoveredSkillCategory(group.title)"
          @focus="setHoveredSkillCategory(group.title)"
          @blur="setHoveredSkillCategory(null)"
        >
          {{ group.title }}
        </button>
      </div>
      <div class="skills-list">
        <q-chip
          v-for="skill in orderedSkills"
          :key="`${skill.category}-${skill.name}`"
          square
          :class="[
            'skill-chip',
            {
              'skill-chip--active':
                !hoveredSkillCategory ||
                skill.category === hoveredSkillCategory,
              'skill-chip--inactive':
                hoveredSkillCategory && skill.category !== hoveredSkillCategory,
            },
          ]"
        >
          {{ skill.name }}
        </q-chip>
      </div>
    </section>

    <section id="experience" class="content-wrap section">
      <h2>Experience Snapshot</h2>
      <div class="experience-list">
        <q-card
          v-for="item in experienceItems"
          :key="`${item.company}-${item.role}`"
          flat
          bordered
          class="snapshot-card"
        >
          <q-card-section class="q-pb-sm">
            <div class="row items-start justify-between experience-head">
              <div class="col-12 col-sm">
                <h3 class="text-h6 q-ma-none">{{ item.role }}</h3>
                <p class="q-ma-none company-line">
                  {{ item.company }} | {{ item.location }}
                </p>
              </div>
              <div class="col-auto">
                <q-badge
                  color="blue-grey-8"
                  text-color="grey-2"
                  :label="item.dates"
                />
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <ul class="bullet-list">
              <li v-for="bullet in item.bullets" :key="bullet">
                {{ bullet }}
              </li>
            </ul>
          </q-card-section>

          <q-card-section v-if="item.stack?.length" class="q-pt-none">
            <div class="row chip-row">
              <q-chip
                v-for="tech in item.stack"
                :key="`${item.company}-${tech}`"
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

    <section id="contact" class="content-wrap section section-last">
      <h2>Contact</h2>
      <p>
        I am open to web development opportunities where I can contribute to
        product delivery, frontend architecture, and customer-facing outcomes.
      </p>
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
          label="Open Resume"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  experienceItems,
  featuredProjects,
  skillGroups,
} from 'src/constants/siteContent';

const hoveredSkillCategory = ref<string | null>(null);

const orderedSkills = computed(() =>
  skillGroups.flatMap((group) =>
    group.skills.map((skill) => ({
      name: skill,
      category: group.title,
    }))
  )
);

const setHoveredSkillCategory = (category: string | null): void => {
  hoveredSkillCategory.value = category;
};
</script>

<style scoped lang="scss">
.portfolio-page {
  color: #eef4fb;
  padding-bottom: 2rem;
}

.content-wrap {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.2rem 0;
}

.hero {
  padding-top: 3.5rem;
}

.eyebrow {
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  color: #7fa4c8;
  font-family: 'roboto-medium';
  margin-bottom: 0.75rem;
}

h1 {
  font-family: 'roboto-semibold';
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.1;
  margin: 0;
  max-width: 16ch;
}

h2 {
  font-family: 'roboto-semibold';
  margin: 0 0 1rem;
}

.hero-copy {
  color: #c8d5e3;
  max-width: 68ch;
  margin: 1rem 0 1.5rem;
}

.section {
  margin-top: 2.2rem;
}

.section-last {
  padding-bottom: 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.project-card {
  background: rgba(15, 29, 45, 0.85);
  border-color: rgba(151, 181, 211, 0.22);
}

.skills-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.85rem;
}

.category-pill {
  border: 1px solid rgba(151, 181, 211, 0.32);
  background: rgba(14, 29, 47, 0.65);
  color: #bdd0e4;
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  font-family: 'roboto-medium';
  font-size: 0.85rem;
  cursor: pointer;
}

.category-pill--active,
.category-pill:hover {
  border-color: rgba(98, 194, 168, 0.9);
  color: #f3fffc;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-chip {
  transition: opacity 0.15s ease, box-shadow 0.15s ease;
}

.skill-chip--active {
  background: rgba(32, 67, 98, 0.95);
  color: #edf6ff;
  opacity: 1;
}

.skill-chip--inactive {
  background: rgba(22, 37, 55, 0.75);
  color: #8ea5bc;
  opacity: 0.58;
}

.snapshot-card {
  background: rgba(15, 29, 45, 0.75);
  border-color: rgba(151, 181, 211, 0.22);
}

.experience-list {
  display: grid;
  gap: 0.9rem;
}

.company-line {
  color: #a9bdd2;
}

.bullet-list {
  margin: 0;
  padding-left: 1rem;
  color: #cfdbeb;
}

.bullet-list li + li {
  margin-top: 0.4rem;
}

.cta-row {
  gap: 0.6rem;
}

.project-head {
  gap: 0.6rem;
}

.experience-head {
  gap: 0.6rem;
}

.chip-row {
  gap: 0.4rem;
}

p {
  color: #cfdbeb;
}

.muted-text {
  color: #9eb3c8;
  font-size: 0.9rem;
}
</style>
