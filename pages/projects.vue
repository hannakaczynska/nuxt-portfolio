<template>
  <UCard class="card">
    <h1>{{ locale === "en" ? "Projects" : "Projekty" }}</h1>
    <section>
      <h2>{{ locale === "en" ? "Solo projects" : "Projekty indywidualne" }}</h2>
<ProjectCard :cards="soloCards" />
    </section>
    <section>
        <h2>{{ locale === "en" ? "Team projects" : "Projekty grupowe" }}</h2>
        <ProjectCard :cards="teamCards" />
    </section>
  </UCard>
</template>

<script setup>
import {computed} from "vue";
import { useLanguage } from "~/composables/useLanguage";
import {createSoloCards} from "~/composables/projectsData";
import ProjectCard from "~/components/project-card.vue";

const { locale } = useLanguage();

// const  { soloCards, teamCards } = computed(() => createSoloCards().value);
const projectData = computed(() => createSoloCards());
const soloCards = computed(() => projectData.value.soloCards.value);
const teamCards = computed(() => projectData.value.teamCards.value);
</script>


<style lang="scss" scoped>
.tech-badges {
    display: flex;
    gap: 5px;
}
</style>