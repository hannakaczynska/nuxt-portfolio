<template>
  <UCard>
    <nav class="nav">
      <NuxtLink to="/projects" class="link">
        <UIcon name="i-lucide-move-left" size="18" class="arrow" />{{
          locale === "en" ? "Projects" : "Projekty"
        }}
      </NuxtLink>
      <NuxtLink :to="`/projects/${nextProject}`" class="link">
        {{ $t(`projects.${nextProject}.title`) }}
        <UIcon name="i-lucide-move-right" size="18" class="arrow" />
      </NuxtLink>
    </nav>
    <h2 class="project_title">{{ $t(`projects.${projectTitle}.title`) }}</h2>
    <nav class="project_nav">
      <NuxtLink to="https://wallet-app-demo.com" class="project_link"
        >[Live Demo]</NuxtLink
      >
      <span>•</span>
      <NuxtLink to="https://github.com/..." class="project_link"
        >[GitHub]</NuxtLink
      >
    </nav>
    <span class="project_info small"
      >{{ $t(`projects.${projectTitle}.work`) }} |
      {{ $t(`projects.${projectTitle}.year`) }}</span
    >
    <!-- deal differently with src and alt (svg)!!!!!!!!!!-->
    <picture class="project_picture">
      <source
        :srcset="$t(`projects.${projectTitle}.img.avif`)"
        type="image/avif"
      />
      <source
        :srcset="$t(`projects.${projectTitle}.img.webp`)"
        type="image/webp"
      />
      <img
        :src="$t(`projects.${projectTitle}.img.png`)"
        :alt="`${projectTitle} screenshot`"
        class="project_img"
      />
    </picture>
    <section>
      <h3>{{ locale === "en" ? "Overview" : "Opis" }}</h3>
      <p class="break">{{ $t(`projects.${projectTitle}.description`) }}</p>
    </section>
    <section>
      <h3>{{ locale === "en" ? "Key features" : "Kluczowe funkcje" }}</h3>
    </section>
    <section>
      <h3>Stack</h3>
      <ul v-if="frontendStack.length">
        <h3>Frontend</h3>
        <li v-for="(stack, index) in frontendStack" :key="index">
          <strong>{{ stack.name }}</strong
          >: <span>{{ stack.description }}</span>
        </li>
      </ul>
            <ul v-if="backendStack.length">
                <h3>Backend</h3>
        <li v-for="(stack, index) in backendStack" :key="index">
          <strong>{{ stack.name }}</strong
          >: <span>{{ stack.description }}</span>
        </li>
      </ul>
    </section>
    <ProjectCarousel
      :images="[
        '/projects/wallet-app/screen1',
        '/projects/wallet-app/screen2',
        '/projects/wallet-app/screen3',
      ]"
    />
  </UCard>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "~/composables/useLanguage";
import ProjectCarousel from "~/components/project-carousel.vue";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from '~/i18n/locales/en.json?raw';

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { locale } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;

const ALL_PROJECTS = [
  "destillapp",
  "wallet-app",
  "portfolio",
  "filmoteka",
  "icecream-shop",
];

const currentIndex = computed(() => {
  return ALL_PROJECTS.findIndex((project) => project === projectTitle);
});

const nextProject = computed(() => {
  const nextIndex = (currentIndex.value + 1) % ALL_PROJECTS.length;
  return ALL_PROJECTS[nextIndex];
});

const projectData = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.projects[projectTitle];
});

const frontendStack = computed(() => {
  return projectData.value?.stack?.frontend || [];
});

const backendStack = computed(() => {
  return projectData.value?.stack?.backend || [];
});

</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
}

.link {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  color: $light-grey-color;
  cursor: ponter;
}

.arrow {
  color: $light-grey-color;
  cursor: ponter;
}

.break {
  white-space: pre-line;
}

.project_title {
  margin-top: 2rem;
}

.project_info {
  display: block;
  text-align: end;
  color: $dark-grey-color;
  margin-block: 10px;
}

.project_picture {
  display: flex;
  margin-inline: auto;
  margin-bottom: 2rem;
  width: 90%;
  justify-content: center;
}

.project_img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid $light-grey-color;
  border-radius: 12px;
}

.project_nav {
  display: flex;
  flex-direction: row;
  gap: 2px;
}

.project_link,
.project_nav span {
  color: $primary-color;
}

.project_link {
  &:hover {
    color: $third-color;
  }
}
</style>
