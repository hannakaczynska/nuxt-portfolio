<template>
  <UCard class="hero">
    <LoadingSpinner v-if="!pageReady" />
    <transition name="fade" mode="out-in">
      <div v-if="pageReady">
        <section class="hero_content">
          <h1 class="hero_title">{{ $t("hero.title") }}</h1>
          <p class="hero_subtitle">{{ $t("hero.subtitle") }}</p>
          <transition name="slowfade">
          <img
            src="/svg/hero.svg"
            alt=""
            class="hero_image"
            width="246"
            height="157"
          />
          </transition>
        </section>
        <nav class="hero-actions">
          <NuxtLink
            :to="localePath('/about')"
            class="hero-link hero-link-about"
          >
            {{ $t("nav.about") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/projects')"
            class="hero-link hero-link-projects"
          >
            {{ $t("nav.projects") }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </UCard>
</template>

<script setup>
import { useRuntimeConfig } from "#app";

const pageReady = ref(false);

const route = useRoute();
const config = useRuntimeConfig();
const localePath = useLocalePath();

const currentUrl = computed(() => `${config.public.siteUrl}${route.fullPath}`);

const { lang } = useLanguage();
const { t } = useI18n();

useHead({
  title: t("home.metaTitle"),
  meta: [
    { name: "description", content: t("home.metaDescription") },
    { property: "og:title", content: t("home.metaTitle") },
    { property: "og:description", content: t("home.metaDescription") },
    { property: "og:url", content: currentUrl.value },
    { property: "og:locale", content: lang.value === "pl" ? "pl_PL" : "en_US" },
  ],
  link: [{ rel: "canonical", href: currentUrl.value }],
});

onMounted(() => {
  pageReady.value = true;
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slowfade-enter-active {
  transition: opacity 1s ease;
}
.slowfade-enter-from {
  opacity: 0;
}
.slowfade-enter-to {
  opacity: 1;
}

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

.hero-link {
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
    font-weight: 400;
    box-shadow: $shadow;
  }
}

.hero-link-about {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;

  &:hover {
    background-color: $secondary-color;
  }
}

.hero-link-projects {
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

  .hero-link {
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
