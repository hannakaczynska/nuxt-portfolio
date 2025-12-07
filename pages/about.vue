<template>
  <UCard>
    <div class="card">
      <h2 class="card_title">{{ lang === "en" ? "About" : "O mnie" }}</h2>
      <AboutHero />
      <AboutStack />
      <div class="contact_link">
        <NuxtLink :to="localePath('/contact')" class="link">
          {{ lang === "en" ? "Contact" : "Kontakt" }}
        </NuxtLink>
      </div>
      <AboutStory />
      <AboutCta />
    </div>
  </UCard>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import AboutStory from "~/components/about/about-story.vue";
import AboutStack from "~/components/about/about-stack.vue";
import AboutHero from "~/components/about/about-hero.vue";
import AboutCta from "~/components/about/avout-cta.vue";
import { useRuntimeConfig } from "#app";

const route = useRoute();
const config = useRuntimeConfig();

const currentUrl = computed(() => `${config.public.siteUrl}${route.fullPath}`);

const { lang } = useLanguage();
const { t } = useI18n();

const localePath = useLocalePath();

useHead({
  title: t("aboutMeta.metaTitle"),
  meta: [
    { name: "description", content: t("aboutMeta.metaDescription") },
    { property: "og:title", content: t("aboutMeta.metaTitle") },
    { property: "og:description", content: t("aboutMeta.metaDescription") },
    { property: "og:url", content: currentUrl.value },
    { property: "og:locale", content: lang.value === "pl" ? "pl_PL" : "en_US" },
  ],
  link: [{ rel: "canonical", href: currentUrl.value }],
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
}

.card_title {
  margin-bottom: 30px;
}

.contact_link {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
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
  background-color: $primary-color;
  color: $white;
  transition: background-color 0.25s ease-out, box-shadow 0.25s ease-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    font-weight: 400;
    box-shadow: $shadow;
    background-color: $third-color;
  }
}

@media (min-width: $breakpoint-tablet) {
  .card {
    padding: 1rem;
  }
}

@media (min-width: $breakpoint-desktop) {
  .card {
    padding: 2rem;
  }

  .card_title {
    margin-bottom: 0;
  }

  .contact_link {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
  }
}
</style>
