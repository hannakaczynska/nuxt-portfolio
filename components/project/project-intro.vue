<template>
<section>
       <h2 class="project_title">{{ $t(`projects.${projectTitle}.title`) }}</h2>
    <nav class="project_nav">
      <NuxtLink to="https://wallet-app-demo.com" class="project_link"
        >[Live Demo]</NuxtLink
      >
      <span>•</span>
      <NuxtLink to="https://github.com/..." class="project_link"
        >[GitHub]</NuxtLink
      >
    </nav>
    <span class="project_info small"
      >{{ $t(`projects.${projectTitle}.work`) }} |
      {{ $t(`projects.${projectTitle}.year`) }}</span
    >
    <!-- deal differently with src and alt (svg)!!!!!!!!!!-->
    <picture class="project_picture">
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
        class="project_img"
      />
    </picture>
</section>
    </template>

    <script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const projectTitle = route.params.title;
    </script>

    <style lang="scss" scoped>
    .project_title {
  margin-top: 2rem;
}

.project_info {
  display: block;
  text-align: end;
  color: $dark-grey-color;
  margin-block: 10px;
}

.project_picture {
  display: flex;
  margin-inline: auto;
  margin-bottom: 2rem;
  width: 90%;
  justify-content: center;
}

.project_img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid $light-grey-color;
  border-radius: 12px;
}

.project_nav {
  display: flex;
  flex-direction: row;
  gap: 2px;
}

.project_link,
.project_nav span {
  color: $primary-color;
}

.project_link {
  &:hover {
    color: $third-color;
  }
}
    </style>