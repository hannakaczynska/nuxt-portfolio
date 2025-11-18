<template>
        <section >
      <h3 class="section_title">{{ locale === "en" ? "Overview" : "Opis" }}</h3>
      <p class="break">{{ $t(`projects.${projectTitle}.description`) }}</p>
    </section>
    </template>

    <script setup>
    import { useLanguage } from "~/composables/useLanguage";
const { locale } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;
    </script>

<style scoped>
.break {
  white-space: pre-line;
}

.section_title {
    margin-bottom: 15px;
}

@media (min-width: $breakpoint-desktop) {
  .section_title {
    margin-bottom: 20px;
}
}
</style>