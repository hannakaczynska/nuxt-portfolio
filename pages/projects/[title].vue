<template>
  <UCard>
    <UIcon name="i-lucide-move-left" size="20" />
    <h2>{{ $t(`projects.${projectTitle}.title`) }}</h2>
         <!-- deal differently with src and alt (svg)!!!!!!!!!!-->
    <picture>
      <source
        :srcset="$t(`projects.${projectTitle}.img.avif`)"
        type="image/avif"
      />
      <source
        :srcset="$t(`projects.${projectTitle}.img.webp`)"
        type="image/webp"
      />
      <img
        :src="$t(`projects.${projectTitle}.img.png`)"
        :alt="`${projectTitle} screenshot`"
      />
    </picture>
    <section>
      <h3>{{ locale === "en" ? "Description" : "Opis" }}</h3>
      <p>{{ $t(`projects.${projectTitle}.description`) }}</p>
    </section>
    <section>
      <h3>Stack</h3>
      <div></div>
    </section>
    <!-- <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 2000 }"
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <img :src="item" width="234" height="234" class="rounded-lg" />
    </UCarousel> -->
  </UCard>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useLanguage } from "~/composables/useLanguage";

const { locale } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;

console.log("project", projectTitle);
</script>
