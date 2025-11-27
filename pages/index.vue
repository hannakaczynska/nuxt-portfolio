<template>
  <UCard class="hero">
    <section class="hero_content">
        <h1 class="hero_title">{{ $t("hero.title") }}</h1>
        <p class="hero_subtitle">{{ $t("hero.subtitle") }}</p>
      <img src="/svg/hero.svg" alt="Hero Image" class="hero_image" />
    </section>
    <nav class="hero-actions">
      <NuxtLink :to="localePath('/about')">
        <button type="button" class="hero-btn hero-btn-about">
          {{ $t("nav.about") }}
        </button>
      </NuxtLink>
      <NuxtLink :to="localePath('/projects')">
        <button type="button" class="hero-btn hero-btn-projects">
          {{ $t("nav.projects") }}
        </button>
      </NuxtLink>
    </nav>
  </UCard>
</template>

<script setup>
import { UCard } from '#components';

const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;
  margin: 20px auto;
  padding: 2rem 0;
}

.hero_content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero_image {
display: none;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.hero-btn {
  height: 40px;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  padding-inline: 15px;
  padding-block: 5px;
  box-sizing: border-box;
  font-weight: 400;

  &:hover {
    font-weight: 400;
  }
}

.hero-btn-about {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;

  &:hover {
    background-color: $secondary-color;
  }
}

.hero-btn-projects {
  background-color: $primary-color;
  color: $white;

  &:hover {
    background-color: $third-color;
  }
}

@media (max-width: 500px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: $breakpoint-tablet) {
  .hero_content {
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr 1fr;
grid-column-gap: 30px;
grid-row-gap: 20px;
align-items: start;
}

.hero_title {
grid-column: 1 / 2;
grid-row: 1 / 2;
}

.hero_subtitle {
grid-column: 1 / 2;
grid-row: 2 / 3;
}

.hero_image {
  display: block;
   align-self: center;
 grid-column: 2 / 3;
 grid-row: 1 / 3;
}

.hero-btn {
  height: 50px;
    padding-inline: 20px;
}
}

@media (min-width: $breakpoint-desktop) {
  .hero {
    padding: 4rem 2rem;
  }
}
</style>
