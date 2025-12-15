<template>
  <section class="about_cta">
    <h3>{{ $t("about.cta.title") }}</h3>
    <p>{{ $t("about.cta.text") }}</p>
    <nav class="about_cta_nav">
      <NuxtLink :to="localePath('/contact')" class="link link-contact">
        {{ lang === "en" ? "Contact" : "Kontakt" }}
      </NuxtLink>
      <a
        :href="$t('about.cta.pdf')"
        target="_blank"
        rel="noopener noreferrer"
        :title="lang === 'en' ? 'Open CV in a new tab' : 'Otwórz CV w nowej karcie'"
        aria-label="Open my CV in PDF format"
        class="link link-cv"
      >
        CV (PDF)
      </a>
    </nav>
    <img src="/svg/cat.svg" alt="" class="cat_image" />
  </section>
</template>

<script setup>
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

.link {
  height: 40px;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  padding-inline: 15px;
  padding-block: 5px;
  box-sizing: border-box;
  font-weight: 400;
  transition: background-color 0.25s ease-out, box-shadow 0.25s ease-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    box-shadow: $shadow;
    font-weight: 400;
  }
}

.link-cv {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;
  padding-inline: 25px;

  &:hover {
    background-color: $secondary-color;
  }
}

.link-contact {
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
