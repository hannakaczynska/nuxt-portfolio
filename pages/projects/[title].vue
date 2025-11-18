<template>
  <UCard>
    <div class="card">
      <nav class="nav">
        <NuxtLink to="/projects" class="link">
          <UIcon name="i-lucide-move-left" class="arrow" />{{
            locale === "en" ? "Projects" : "Projekty"
          }}
        </NuxtLink>
        <NuxtLink :to="`/projects/${nextProject}`" class="link">
          {{ $t(`projects.${nextProject}.title`) }}
          <UIcon name="i-lucide-move-right" class="arrow" />
        </NuxtLink>
      </nav>
      <div class="section_container">
        <div class="grid-container">
          <ProjectIntro class="intro" />
          <ProjectOverview class="overview" />
        </div>
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
  cursor: pointer;
}

.arrow {
  width: 18px;
  height: 18px;
  color: $light-grey-color;
  cursor: pointer;
}

.section_container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media (min-width: $breakpoint-tablet) {
  .card {
    padding: 1rem;
  }

  .nav {
    font-size: 14px;
  }

  .arrow {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: $breakpoint-desktop) {
  .card {
    padding: 2rem;
  }

  .nav {
    font-size: 16px;
  }

  .arrow {
    width: 22px;
    height: 22px;
  }

  .section_container {
    gap: 80px;
  }

  .grid-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 100px auto;
    grid-column-gap: 30px;
  }

  .intro {
    grid-column: 1 / 3;
    grid-row: 1 /4;
  }

  .overview {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}
</style>
