<template>
  <UCard class="card">
    <div class="content">
    <h1>{{ locale === "en" ? "Projects" : "Projekty" }}</h1>
    <section class="section">
      <h2>{{ locale === "en" ? "Solo projects" : "Projekty indywidualne" }}</h2>
<ProjectCard :cards="soloCards" />
    </section>
    <section class="section">
        <h2>{{ locale === "en" ? "Team projects" : "Projekty grupowe" }}</h2>
        <ProjectCard :cards="teamCards" />
    </section>
</div>
  </UCard>
</template>

<script setup>
import { UCard } from '#components';
import { useLanguage } from "~/composables/useLanguage";
import {createCards} from "~/composables/projectsData";
import ProjectCard from "~/components/project-card.vue";

const { locale } = useLanguage();

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