<template>
  <header>
    <UIcon
      name="i-lucide-menu"
      class="header_menu-icon"
      size="24"
      @click="isMenuOpen = !isMenuOpen"
    />
    <MobileMenu v-if="isMenuOpen" />
    <nav class="header_nav">
      <NuxtLink to="/">{{$t("nav.home") }}</NuxtLink>
      <NuxtLink to="/about">{{$t("nav.about") }}</NuxtLink>
      <NuxtLink to="/projects">{{$t("nav.projects") }}</NuxtLink>
      <NuxtLink to="/contact">{{$t("nav.contact") }}</NuxtLink>
    </nav>
    <button class="header_button" @click="switchLanguage(locale === 'en' ? 'pl' : 'en')">
      <UIcon name="i-lucide-globe" size="20" />
      {{ locale === "en" ? "EN" : "PL" }}
    </button>
  </header>
</template>

<script setup>
import { ref } from "vue";
import MobileMenu from "~/components/mobile-menu.vue";
import { useLanguage } from "~/composables/useLanguage";

const isMenuOpen = ref(false);
// const { t, locale: i18nLocale } = useI18n();
const { locale, switchLanguage } = useLanguage();

// Debug: Check what's available
console.log('Current locale:', locale.value);
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $white;
  padding-block: 1rem;
  padding-inline: 2rem;
}
nav a {
  margin-right: 1rem;
}

.header_menu-icon {
  cursor: pointer;
  color: $text-color;

  @media (min-width: $breakpoint-tablet) {
    display: none;
  }
}

.header_nav {
  display: none;

  @media (min-width: $breakpoint-tablet) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
}

.header_button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: none;
  color: $dark-grey-color;
  background: none;
  font-size: 18px;
  cursor: pointer;
  padding-inline: 0;
}
</style>
