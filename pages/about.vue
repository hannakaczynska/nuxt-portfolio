<template>
  <UCard>
    <div class="card">
      <h2>{{ locale === "en" ? "About" : "O mnie" }}</h2>
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
      <section class="section">
        <h3 class="stack_title">Stack</h3>
        <div class="stack-badges">
          <UBadge
            v-for="(stack, stackIndex) in myStack"
            :key="stackIndex"
            size="lg"
            color="neutral"
            variant="outline"
          >
            {{ stack.name || stack }}
            <UIcon
              :name="stack.icon"
              class="stack_icon"
              :style="{ color: '#70af7a' }"
            />
          </UBadge>
        </div>
      </section>
      <section class="section">
        <h3>{{ locale === "en" ? "My story" : "Moja historia" }}</h3>
        <div class="story_cards">
          <UCard
            v-for="(storyItem, key) in myJourney"
            :key="key"
            class="story_card"
          >
            <div class="story_into">
              <h4 class="story_title">{{ storyItem.title }}</h4>
              <UIcon :name="storyItem.icon" class="story_icon" />
            </div>
            <p>{{ storyItem.text }}</p>
          </UCard>
        </div>
      </section>
    </div>
  </UCard>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { locale } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;

const myStack = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.about.stack;
});

const myJourney = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.about.story;
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
}

.section_hero {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
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

.stack-badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.story_cards {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
}

.story_into {
  display: flex;
  gap: 10px;
  font-weight: 600;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px
}

.story_title {
  text-align: center;
}

.story_icon {
  width: 24px;
  height: 24px;
  color: $primary-color;
}

@media (min-width: $breakpoint-tablet) {
  .card {
    padding: 1rem;
  }

  .section {
 margin-bottom: 80px;
  }
}

@media (min-width: $breakpoint-desktop) {
    .card {
    padding: 2rem;
  }

  .story_cards {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
}
}
</style>
