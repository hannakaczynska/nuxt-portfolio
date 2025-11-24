<template>
  <header>
    <UIcon
      name="i-lucide-menu"
      class="header_menu-icon"
      size="24"
      @click="isMenuOpen = !isMenuOpen"
    />
    <MobileMenu v-if="isMenuOpen" @closeMenu="closeMenu" />
    <nav class="header_nav">
      <NuxtLink to="/">{{$t("nav.home") }}</NuxtLink>
      <NuxtLink to="/about">{{$t("nav.about") }}</NuxtLink>
      <NuxtLink to="/projects">{{$t("nav.projects") }}</NuxtLink>
      <NuxtLink to="/contact">{{$t("nav.contact") }}</NuxtLink>
    </nav>
    <button class="header_button" @click="switchLanguage(locale === 'en' ? 'pl' : 'en')">
      <UIcon name="i-lucide-globe" size="20" />
  <span class="header_button-text">{{ locale === "en" ? "EN" : "PL" }}</span>
    </button>
  </header>
</template>

<script setup>
import { UIcon } from '#components';
import MobileMenu from "~/components/mobile-menu.vue";
import { useLanguage } from "~/composables/useLanguage";

const isMenuOpen = ref(false);

const { locale, switchLanguage } = useLanguage();

const closeMenu = () => {
  isMenuOpen.value = false;
};

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
  color: $light-grey-color;
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
