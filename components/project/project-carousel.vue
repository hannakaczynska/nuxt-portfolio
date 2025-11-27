<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div
        class="embla__slide"
        v-for="(img, index) in images"
        :key="index"
      >
       <div class="slide-inner">
        <picture class="slide__picture">
          <source :srcset="`${img}.avif`" type="image/avif" />
          <source :srcset="`${img}.webp`" type="image/webp" />
          <img :src="`${img}.png`" alt="Project screenshot" />
        </picture>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';

const [emblaRef] = emblaCarouselVue(
  { 
    loop: true,
    align: 'center'
  }, 
  [
    Autoplay({ delay: 3000 }),
    ClassNames({
      snapped: 'embla__slide--snapped',
      inView: 'embla__slide--in-view'
    })
  ]
);

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>


<style lang="scss" scoped>
.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
  flex-direction: row;
  height: auto;
}

.embla__slide {
  flex: 0 0 70%;
  padding: 0.5rem;
  min-height: 0;
}

.slide-inner {
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
  filter: blur(2px);
  opacity: 0.6;
  transform: scale(0.9);
}

.embla__slide--snapped .slide-inner {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
  z-index: 1;
}

img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

@media (min-width: 500px) {
  .embla__slide {
    flex: 0 0 50%;
  }
}

@media (min-width: $breakpoint-tablet) {
  .embla__slide {
    flex: 0 0 40%;
    padding: 1rem;
  }
}

@media (min-width: $breakpoint-desktop) {
  .embla__slide {
    flex: 0 0 30%;
    padding: 2rem;
  }
}
</style>