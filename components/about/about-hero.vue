<template>
  <section class="section_hero">
    <p class="section_text">{{ $t(`about.hero`) }}</p>
    <div class="picture_container">
      <picture class="picture">
        <source srcset="/public/images/myPhoto.avif" type="image/avif" />
        <source srcset="/public/images/myPhoto.webp" type="image/webp" />
        <img src="/public/images/myPhoto.png" alt="My photo" />
      </picture>
    </div>
  </section>
</template>

<script setup>
// No additional imports needed since we're using $t from the parent
</script>

<style lang="scss" scoped>
.section_hero {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.picture_container {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid $third-color;
  margin-right: 0;
  margin-left: auto;
}

.picture {
  width: 100%;
  height: auto;
}

@media (min-width: 500px) {
  .section_hero {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 50px;
    align-items: center;
  }

    .section_text {
    flex: 2;
  }
  .picture_container {
    flex-shrink: 0;
    flex: 1;
    max-width: 100px;
    max-height: 100px;
    min-width: 100px;
    min-height: 100px;
    margin: 0;
  }
}

@media (min-width: $breakpoint-tablet) {
  .section_hero {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 50px;
  }

  .picture_container {
    max-width: 150px;
    max-height: 150px;
    min-width: 150px;
    min-height: 150px;
    align-self: end;
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

  .picture_container {
    max-width: 175px;
    max-height: 175px;
    min-width: 175px;
    min-height: 175px;
  }

}
</style>
