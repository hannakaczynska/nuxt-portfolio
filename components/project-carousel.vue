<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div
        class="embla__slide"
        v-for="(img, index) in images"
        :key="index"
      >
        <picture>
          <source :srcset="`${img}.avif`" type="image/avif" />
          <source :srcset="`${img}.webp`" type="image/webp" />
          <img :src="`${img}.png`" alt="Project screenshot" />
        </picture>
      </div>
    </div>
</div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
  import Autoplay from 'embla-carousel-autoplay';

const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()]);

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
  flex-direction: row;
  height: 200px;

}

.embla__slide {
  flex: 0 0 100%;
  padding: 1rem;
}

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
