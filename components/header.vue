<template>
  <header>
    <button
      class="header_menu-button"
      type="button"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-controls="mobile-menu"
      :aria-label="
        isMenuOpen
          ? lang === 'en'
            ? 'Close menu'
            : 'Zamknij menu'
          : lang === 'en'
          ? 'Open menu'
          : 'Otwórz menu'
      "
    >
      <UIcon name="i-lucide-menu" size="24" aria-hidden="true" class="header_menu-icon" />
    </button>
    <MobileMenu v-if="isMenuOpen" @closeMenu="closeMenu"/>
    <nav class="header_nav" :aria-label="lang === 'en' ? 'Main navigation' : 'Główna nawigacja'">
      <NuxtLink :to="localePath('/')">{{ $t("nav.home") }}</NuxtLink>
      <NuxtLink :to="localePath('/about')">{{ $t("nav.about") }}</NuxtLink>
      <NuxtLink :to="localePath('/projects')">{{
        $t("nav.projects")
      }}</NuxtLink>
      <NuxtLink :to="localePath('/contact')">{{ $t("nav.contact") }}</NuxtLink>
    </nav>
    <button
      class="header_button"
      type="button"
      @click="switchLanguage(lang === 'en' ? 'pl' : 'en')"
      :aria-label="lang === 'en' ? 'Switch to Polish' : 'Przełącz na angielski'"
    >
      <UIcon name="i-lucide-globe" size="20" />
      <span class="header_button-text">{{ lang === "en" ? "EN" : "PL" }}</span>
    </button>
  </header>
</template>

<script setup>
import MobileMenu from "~/components/mobile-menu.vue";
  import { useLanguage } from "~/composables/useLanguage";

const isMenuOpen = ref(false);

const { lang, switchLanguage } = useLanguage();
const localePath = useLocalePath();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(isMenuOpen, (open) => {
  if (open) {
    nextTick(() => {
      const firstLink = document.querySelector('#mobile-menu a');
      firstLink?.focus();
    });
  }
});

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

.header_menu-button {
  cursor: pointer;
  color: $text-color;
  height: 24px;

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
  &-text {
    line-height: 1.3;
    box-sizing: border-box;
    padding-top: 1px;
  }
}
</style>
