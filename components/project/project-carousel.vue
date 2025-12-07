<template>
  <div
    class="embla"
    ref="emblaRef"
    role="region" :aria-label="lang === 'en' ? `Project screenshot gallery for ${projectTitle}` : `Galeria screenshotów projektu ${projectTitle}`"
  >
    <div class="embla__container">
      <div class="embla__slide" v-for="(img, index) in images" :key="index">
        <div class="slide-inner">
          <picture class="slide__picture">
            <source :srcset="`${img}.avif`" type="image/avif" />
            <source :srcset="`${img}.webp`" type="image/webp" />
            <img
              :src="`${img}.png`"
              :alt="$t(`projects.${projectTitle}.imgalt.screen${index + 1}`)"
              :loading="index === 0 ? 'eager' : 'lazy'"
            />
          </picture>
        </div>
      </div>
    </div>
    <p class="sr-only" aria-live="polite">
      Slajd {{ active + 1 }} z {{ images.length }}
    </p>
    <div class="autoplay-controls">
      <button
        type="button"
        @click="isPlaying ? pauseAutoplay() : playAutoplay()"
        :aria-pressed="isPlaying.toString()"
        :aria-label="isPlaying ? 'Pauza karuzeli' : 'Odtwórz karuzelę'"
        class="autoplay-button"
      >
        <UIcon v-if="!isPlaying" name="i-lucide-square-play" class="icon" />
        <UIcon v-else name="i-lucide-square-pause" class="icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { useLanguage } from "~/composables/useLanguage";

const route = useRoute();
const projectTitle = route.params.title;
const { lang } = useLanguage();
const active = ref(0);

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });

const [emblaRef, emblaApi] = emblaCarouselVue(
  {
    loop: true,
    align: "center",
  },
  [
    autoplayPlugin,
    ClassNames({
      snapped: "embla__slide--snapped",
      inView: "embla__slide--in-view",
    }),
  ]
);

const isPlaying = ref(true);

const pauseAutoplay = () => {
  autoplayPlugin.stop();
  isPlaying.value = false;
};

const playAutoplay = () => {
  autoplayPlugin.play();
  isPlaying.value = true;
};

const updateActive = () => {
  if (emblaApi.value) {
    active.value = emblaApi.value.selectedScrollSnap();
  }
};

onMounted(() => {
  if (!emblaApi.value) return;

  emblaApi.value.on("select", updateActive);
  updateActive();
});
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
  border: 1px solid $light-grey-color;
  border-radius: 12px;
}

img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.autoplay-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 15px;
}

.autoplay-button {
  cursor: pointer;
}

.icon {
  color: $primary-color;
  width: 30px;
  height: 30px;
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
