<template>
  <UCard>
    <div class="card">
      <ProjectNavigation />
      <div class="section_container">
        <div class="grid-container">
          <ProjectIntro class="intro" />
          <ProjectOverview class="overview" />
        </div>
        <ProjectFeatures />
        <ProjectResponsibility />
        <ProjectStack />
        <ProjectNavigation />
        <ProjectCarousel
          :images="[
            '/projects/wallet-app/screen1',
            '/projects/wallet-app/screen2',
            '/projects/wallet-app/screen3',
            '/projects/wallet-app/screen4',
            '/projects/wallet-app/screen5',
          ]"
        />
      </div>
    </div>
  </UCard>
</template>

<script setup>
import { UCard } from "#components";
import ProjectCarousel from "~/components/project/project-carousel.vue";
import ProjectIntro from "~/components/project/project-intro.vue";
import ProjectFeatures from "~/components/project/project-features";
import ProjectStack from "~/components/project/project-stack";
import ProjectOverview from "~/components/project/project-overview";
import ProjectResponsibility from "~/components/project/project-responsibilities";
import ProjectNavigation from "~/components/project/project-navigation.vue";
</script>

<style lang="scss" scoped>
.section_container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

@media (min-width: $breakpoint-tablet) {
  .card {
    padding: 1rem;
  }
}

@media (min-width: $breakpoint-desktop) {
  .card {
    padding: 2rem;
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
