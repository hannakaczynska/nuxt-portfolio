<template>
  <section class="about_cta">
    <h3>{{ $t("about.cta.title") }}</h3>
    <p>{{ $t("about.cta.text") }}</p>
    <nav class="about_cta_nav">
      <NuxtLink to="/contact"
        ><button class="btn btn-contact">
          {{ locale === "en" ? "Contact" : "Kontakt" }}
        </button></NuxtLink
      >
      <NuxtLink to="/projects"
        ><button class="btn btn-projects">
          {{ locale === "en" ? "Projects" : "Projekty" }}
        </button></NuxtLink
      >
    </nav>
    <img :src="cat" alt="Cat Image" class="cat_image" />
  </section>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import cat from "~/assets/svg/cat.svg";

const { locale } = useLanguage();
</script>

<style lang="scss" scoped>
.about_cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-block: 30px;
  gap: 15px;
}

.about_cta_nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

.btn {
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

.btn-projects {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;

  &:hover {
    background-color: $secondary-color;
  }
}

.btn-contact {
  background-color: $primary-color;
  color: $white;

  &:hover {
    background-color: $third-color;
  }
}

.cat_image {
  width: 50%;
  height: auto;
  margin-top: 50px;
  align-self: flex-end;
}

@media (min-width: 500px) {
  .about_cta_nav {
    flex-direction: row;
  }
}

@media (min-width: $breakpoint-tablet) {
  .cat_image {
    width: 40%;
  }
}

@media (min-width: $breakpoint-desktop) {
  .cat_image {
    width: 30%;
  }
}
</style>
