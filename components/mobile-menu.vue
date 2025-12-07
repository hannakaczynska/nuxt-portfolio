<template>
  <nav
    id="mobile-menu"
    class="mobile-menu"
    :aria-label="lang === 'en' ? 'Mobile navigation' : 'Nawigacja mobilna'"
    @click="navigate"
  >
    <NuxtLink :to="localePath('/')" class="mobile-menu_link">{{
      $t("nav.home")
    }}</NuxtLink>
    <NuxtLink :to="localePath('/about')" class="mobile-menu_link">{{
      $t("nav.about")
    }}</NuxtLink>
    <NuxtLink :to="localePath('/projects')" class="mobile-menu_link">{{
      $t("nav.projects")
    }}</NuxtLink>
    <NuxtLink :to="localePath('/contact')" class="mobile-menu_link">{{
      $t("nav.contact")
    }}</NuxtLink>
  </nav>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
const { lang } = useLanguage();
const emit = defineEmits(["closeMenu"]);

const localePath = useLocalePath();

const handleWindowClick = (e) => {
  if (
    e.target.closest(".mobile-menu") ||
    e.target.closest(".header_button") ||
    e.target.closest(".header_menu-button") ||
    e.target.className.includes("header_menu-button") ||
    e.target.className.includes("header_menu-icon")
  ) {
    return;
  }
  emit("closeMenu");
};

const handleEscape = (e) => {
  if (e.key === "Escape") {
    emit("closeMenu");
  }
};

const handleResize = () => {
  if (window.innerWidth > 767) {
    emit("closeMenu");
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
  window.addEventListener("click", handleWindowClick);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscape);
  window.removeEventListener("click", handleWindowClick);
  window.removeEventListener("resize", handleResize);
});

const navigate = (e) => {
  if (e.target.className.includes("mobile-menu_link")) {
    emit("closeMenu");
  }
  return;
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: $white;
  position: absolute;
  border-bottom-right-radius: 20px;
  top: 56px;
  left: 0;
  width: 200px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
