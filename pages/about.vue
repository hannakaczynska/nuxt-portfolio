<template>
  <UCard>
    <div class="card">
      <h2>{{ locale === "en" ? "About" : "O mnie" }}</h2>
      <AboutHero />
      <AboutStack />
      <AboutStory />
    </div>
  </UCard>
</template>

<script setup>
import { UCard } from "#components";
import { useLanguage } from "~/composables/useLanguage";
import AboutStory from "~/components/about/about-story.vue";
import AboutStack from "~/components/about/about-stack.vue";
import AboutHero from "~/components/about/about-hero.vue";

const { locale } = useLanguage();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
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
}
</style>
