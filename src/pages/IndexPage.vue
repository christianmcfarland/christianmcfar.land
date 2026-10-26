<template>
  <q-page class="site-page">
    <section class="hero content-wrap">
      <p class="eyebrow">Software Engineer</p>
      <h1>Christian McFarland</h1>
      <p class="hero-copy">
        Software engineer with 8+ years building and modernizing production
        web applications across healthcare, SaaS, and B2B ecommerce.
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
          to="/portfolio"
          outline
          color="grey-3"
          no-caps
          label="View Portfolio"
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
                <p v-if="item.note" class="q-ma-none company-note">
                  {{ item.note }}
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
      <p>I’m open to full-time SaaS/product engineering roles.</p>
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
.skills-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.85rem;
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

.experience-list {
  display: grid;
  gap: 0.9rem;
}

.company-line {
  color: #a9bdd2;
}

.company-note {
  color: #8ea5bc;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 0.25rem;
}

.experience-head {
  gap: 0.6rem;
}
</style>
