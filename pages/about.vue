<template>
  <UCard>
    <div class="card">
      <h2 class="card_title">{{ locale === "en" ? "About" : "O mnie" }}</h2>
      <div class="grid-container">
      <AboutHero class="hero" />
      <AboutStack  class="stack"/>    
    </div> 
      <div class="contact_link">
      <NuxtLink to="/contact">
        <button type="button" class="btn_contact">
          {{ locale === "en" ? "Contact" : "Kontakt" }}
        </button>
      </NuxtLink>
      </div> 
      <AboutStory />
      <AboutCta />
    </div>
  </UCard>
</template>

<script setup>
import { UCard } from "#components";
import { useLanguage } from "~/composables/useLanguage";
import AboutStory from "~/components/about/about-story.vue";
import AboutStack from "~/components/about/about-stack.vue";
import AboutHero from "~/components/about/about-hero.vue";
import AboutCta from "~/components/about/avout-cta.vue"; 

const { locale } = useLanguage();
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

.btn_contact {
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

  &:hover {
    font-weight: 400;
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

  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
    margin-bottom: 50px;
  }

  .hero {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .stack {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
  }

  .contact_link {
display: flex;
justify-content: center;
    width: 100%;
  }
}

</style>
