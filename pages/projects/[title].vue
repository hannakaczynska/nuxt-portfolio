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
    <ProjectIntro />
    <div class="section_container">
      <ProjectOverview />
      <ProjectFeatures />
      <ProjectResponsibility />
      <ProjectStack />
          <ProjectCarousel
      :images="[
        '/projects/wallet-app/screen1',
        '/projects/wallet-app/screen2',
        '/projects/wallet-app/screen3',
      ]"
    />
    </div>
  </UCard>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "~/composables/useLanguage";
import ProjectCarousel from "~/components/project/project-carousel.vue";
import ProjectIntro from "~/components/project/project-intro.vue";
import ProjectFeatures from "~/components/project/project-features";
import ProjectStack from "~/components/project/project-stack";
import ProjectOverview from "~/components/project/project-overview";
import ProjectResponsibility from "~/components/project/project-responsibilities";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

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

.section_container {
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>
