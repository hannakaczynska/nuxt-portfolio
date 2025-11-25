<template>
  <section class="section_hero">
    <p>{{ $t(`about.hero`) }}</p>
    <div class="picture_container">
      <picture class="picture">
        <source srcset="/images/myPhoto.avif" type="image/avif" />
        <source srcset="/images/myPhoto.webp" type="image/webp" />
        <img src="/images/myPhoto.png" alt="My photo" />
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
</style>