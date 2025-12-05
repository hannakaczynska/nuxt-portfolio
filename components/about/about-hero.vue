<template>
  <section class="section_hero">
    <p class="section_text">{{ $t(`about.hero`) }}</p>
    <picture class="picture">
      <source
        srcset="/images/myPhoto-1200.avif 1200w, /images/myPhoto-800.avif 800w"
        type="image/avif"
      />
      <source
        srcset="/images/myPhoto-1200.webp 1200w, /images/myPhoto-800.webp 800w"
        type="image/webp"
      />
      <img
        src="/images/myPhoto-800.png"
        :alt="lang === 'en' ? 'Photo of the portfolio author' : 'Zdjęcie autorki portfolio'"
        class="img"
      />
    </picture>
  </section>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";

const { lang } = useLanguage();
</script>

<style lang="scss" scoped>
.section_hero {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.picture {
  width: 150px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid $third-color;
  margin-right: 5vw;
  margin-left: auto;
}

.img {
  height: 100%;
  width: auto;
}

@media (min-width: $breakpoint-tablet) {
  .section_hero {
    flex-direction: row;
    gap: 50px;
    margin-bottom: 50px;
    align-items: center;
  }

  .section_text {
    flex: 2;
  }
}

@media (min-width: $breakpoint-desktop) {
  .section_hero {
    gap: 80px;
    margin-inline: 30px;
    margin-bottom: 0;
  }

  .section_text {
    max-width: 70%;
  }

  .picture {
    width: 240px;
    height: 320px;
  }
}
</style>
