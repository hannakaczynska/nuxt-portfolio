<template>
  <section class="section_intro">
    <h1 class="sr-only">{{ lang === 'en' ? 'Project Page' : 'Strona Projektu' }}</h1>
    <h2 class="project_title">{{ $t(`projects.${projectTitle}.title`) }}</h2>
    <nav class="project_nav">
      <a
        :href="$t(`projects.${projectTitle}.demo`)"
        v-if="$t(`projects.${projectTitle}.demo`)"
        class="project_link"
        target="_blank"
        rel="noopener noreferrer"
        :title="lang === 'en' ? 'Open live demo in a new tab' : 'Otwórz demo w nowej karcie'"
        >[Live Demo]</a
      >
      <span v-if="$t(`projects.${projectTitle}.demo`)">•</span>
      <a
        :href="$t(`projects.${projectTitle}.github`)"
        class="project_link"
        target="_blank"
        rel="noopener noreferrer"
        :title="lang === 'en' ? 'Open GitHub repository in a new tab' : 'Otwórz repozytorium GitHub w nowej karcie'"
        >[GitHub]</a
      >
    </nav>
    <span class="project_info small"
      >{{ $t(`projects.${projectTitle}.work`) }} |
      {{ $t(`projects.${projectTitle}.year`) }}</span
    >
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
        :alt="$t(`projects.${projectTitle}.alt`)"
        loading="lazy"
        class="project_img"
      />
    </picture>
  </section>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
const { lang } = useLanguage();
const route = useRoute();
const projectTitle = route.params.title;
</script>

<style lang="scss" scoped>
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
  transition: color 0.25s ease-out;
}

.project_link {
  &:hover {
    color: $third-color;
  }
}

@media (min-width: $breakpoint-desktop) {
  .section_intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 100px auto;
    grid-column-gap: 20px;
  }

  .project_title {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-top: 0;
  }
  .project_nav {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .project_info {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: end;
  }
  .project_picture {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    width: 100%;
    height: auto;
    margin-bottom: 0;
    justify-self: center;
    align-self: center;
  }

  .project_img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 100%;
  }
}
</style>
