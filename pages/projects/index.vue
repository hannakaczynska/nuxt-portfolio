<template>
  <UCard class="card">
    <div class="content">
      <h1>{{ lang === "en" ? "Projects" : "Projekty" }}</h1>
      <section class="section">
        <h2>{{ lang === "en" ? "Solo projects" : "Projekty indywidualne" }}</h2>
        <ProjectCard :cards="soloCards" />
      </section>
      <section class="section">
        <h2>{{ lang === "en" ? "Team projects" : "Projekty grupowe" }}</h2>
        <ProjectCard :cards="teamCards" />
      </section>
    </div>
  </UCard>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import { createCards } from "~/composables/projectsData";
import ProjectCard from "~/components/project-card.vue";
import { useRuntimeConfig } from "#app";

const route = useRoute();
const config = useRuntimeConfig();
const { lang } = useLanguage();
const { t } = useI18n();

const currentUrl = computed(() => `${config.public.siteUrl}${route.fullPath}`);

useHead({
  title: t("projectsMeta.metaTitle"),
  meta: [
    { name: "description", content: t("projectsMeta.metaDescription") },
    { property: "og:title", content: t("projectsMeta.metaTitle") },
    { property: "og:description", content: t("projectsMeta.metaDescription") },
    { property: "og:url", content: currentUrl.value },
    { property: "og:locale", content: lang.value === "pl" ? "pl_PL" : "en_US" },
  ],
  link: [{ rel: "canonical", href: currentUrl.value }],
});

const projectData = computed(() => createCards());
const soloCards = computed(() => projectData.value.soloCards.value);
const teamCards = computed(() => projectData.value.teamCards.value);
</script>

<style lang="scss" scoped>
.card {
  padding: 1rem 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tech-badges {
  display: flex;
  gap: 5px;
}

@media (min-width: $breakpoint-tablet) {
  .content {
    padding: 2rem 3rem;
  }
}
</style>
