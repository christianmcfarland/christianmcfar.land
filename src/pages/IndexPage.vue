<template>
  <q-page class="portfolio-page">
    <section class="hero content-wrap">
      <p class="eyebrow">Web Developer</p>
      <h1>Christian McFarland</h1>
      <p class="hero-copy">
        Web developer with 9+ years experience building production web
        applications across healthcare and B2B SaaS.
      </p>
      <div class="row cta-row">
        <q-btn
          href="mailto:christianmcfarland@gmail.com"
          color="secondary"
          unelevated
          no-caps
          label="Start a Project"
        />
        <q-btn
          href="/resume.pdf"
          target="_blank"
          outline
          color="grey-3"
          no-caps
          label="Download Resume"
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

    <section id="skills" class="content-wrap section">
      <h2>Skills &amp; tools</h2>
      <div class="skills-categories">
        <button
          class="category-pill"
          type="button"
          :class="{
            'category-pill--active': selectedSkillCategory === null,
          }"
          :aria-pressed="selectedSkillCategory === null"
          @click="selectSkillCategory(null)"
        >
          All
        </button>
        <button
          v-for="group in skillGroups"
          :key="group.title"
          class="category-pill"
          type="button"
          :class="{
            'category-pill--active': selectedSkillCategory === group.title,
          }"
          :aria-pressed="selectedSkillCategory === group.title"
          @click="selectSkillCategory(group.title)"
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
                !selectedSkillCategory ||
                skill.category === selectedSkillCategory,
              'skill-chip--inactive':
                selectedSkillCategory &&
                skill.category !== selectedSkillCategory,
            },
          ]"
        >
          {{ skill.name }}
        </q-chip>
      </div>
    </section>

    <section id="experience" class="content-wrap section">
      <h2>Experience</h2>
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
        I am open to work including WordPress site/plugin audits, custom plugin
        development, and ongoing support.
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
          label="Download Resume"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { experienceItems, skillGroups } from 'src/constants/siteContent';

const selectedSkillCategory = ref<string | null>(null);

const orderedSkills = computed(() =>
  skillGroups.flatMap((group) =>
    group.skills.map((skill) => ({
      name: skill,
      category: group.title,
    }))
  )
);

const selectSkillCategory = (category: string | null): void => {
  selectedSkillCategory.value = category;
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
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  line-height: 1.1;
  margin: 0;
  max-width: none;
}

h2 {
  font-family: 'roboto-semibold';
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  line-height: 1.2;
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

.experience-head {
  gap: 0.6rem;
}

.chip-row {
  gap: 0.4rem;
}

p {
  color: #cfdbeb;
}
</style>
