<template>
  <section class="about_cta">
    <h3>{{ $t("about.cta.title") }}</h3>
    <p>{{ $t("about.cta.text") }}</p>
    <nav class="about_cta_nav">
      <NuxtLink :to="localePath('/contact')"
        ><button class="btn btn-contact">
          {{ lang === "en" ? "Contact" : "Kontakt" }}
        </button></NuxtLink
      >
      <a
        href="https://example.com/my-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="story_link"
      >
        <button class="btn btn-cv">CV</button></a
      >
    </nav>
    <img src="/svg/cat.svg" alt="Cat Image" class="cat_image" />
  </section>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";

const { lang } = useLanguage();
const localePath = useLocalePath();
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
  transition: background-color .25s ease-out, box-shadow .25s ease-out;

  &:hover {
    box-shadow: $shadow;
    font-weight: 400;
  }
}

.btn-cv {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;
  padding-inline: 25px;

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
