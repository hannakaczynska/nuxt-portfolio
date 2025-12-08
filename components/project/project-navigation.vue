<template>
  <nav class="nav" :aria-label="lang === 'en' ? 'Projects navigation' : 'Nawigacja projektów'">
    <NuxtLink
      :to="localePath('/projects')"
      class="link"
      :aria-label="lang === 'en' ? 'Back to projects' : 'Wróć do projektów'"
    >
      <UIcon name="i-lucide-move-left" class="arrow" aria-hidden="true" />
      {{ lang === "en" ? "Projects" : "Projekty" }}
    </NuxtLink>
    <NuxtLink
      :to="localePath(`/projects/${nextProject}`)"
      class="link"
      :aria-label="
        lang === 'en'
          ? `Next project: ${
              enData.projects[nextProject]?.title || 'Next Project'
            }`
          : `Następny projekt: ${
              plData.projects[nextProject]?.title || 'Następny projekt'
            }`
      "
    >
      {{
        lang === "en"
          ? enData.projects[nextProject]?.title || "Next Project"
          : plData.projects[nextProject]?.title || "Następny Projekt"
      }}
      <UIcon name="i-lucide-move-right" class="arrow" aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { lang } = useLanguage();
const localePath = useLocalePath();

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
  color: $dark-grey-color;
  cursor: pointer;
  transition: color 0.25s ease-out;

  &:hover {
    color: $third-color;
  }
}

/* Move .arrow outside of .link for proper specificity */
.arrow {
  width: 18px;
  height: 18px;
  color: $dark-grey-color;
  cursor: pointer;
  transition: color 0.25s ease-out;
}

/* Hover effect for arrow when link is hovered */
.link:hover .arrow {
  color: $third-color;
}

@media (min-width: $breakpoint-tablet) {
  .nav {
    font-size: 14px;
  }

  .arrow {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: $breakpoint-desktop) {
  .nav {
    font-size: 16px;
  }

  .arrow {
    width: 22px;
    height: 22px;
  }
}
</style>
