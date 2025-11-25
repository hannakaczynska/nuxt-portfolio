<template>
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
        <p v-if="storyItem.textone">
          {{ storyItem.textone }}
          <a
            :href="storyItem.courses[0].pdf"
            target="_blank"
            rel="noopener noreferrer"
            >{{ storyItem.courses[0].name }}</a
          >
          {{ locale === "en" ? "and" : "i" }}
          <a
            :href="storyItem.courses[1].pdf"
            target="_blank"
            rel="noopener noreferrer"
            >{{ storyItem.courses[1].name }}</a
          >
          {{ storyItem.texttwo
          }}<a
            :href="storyItem.courses[2].pdf"
            target="_blank"
            rel="noopener noreferrer"
            >{{ storyItem.courses[2].name }}</a
          >
          {{ storyItem.textthree }}
        </p>
        <p v-else>{{ storyItem.text }}</p>
        <div v-if="storyItem.buttons" class="story_buttons">
          <NuxtLink
            v-if="storyItem.buttons.project"
            :to="storyItem.buttons.project"
          >
            <button type="button" class="btn btn-project">
              {{ storyItem.buttons.projectName }}
            </button>
          </NuxtLink>
          <NuxtLink
            v-if="storyItem.buttons.projects"
            :to="storyItem.buttons.projects"
          >
            <button type="button" class="btn btn-projects">
              {{ locale === "en" ? "Projects" : "Projekty" }}
            </button>
          </NuxtLink>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup>
import { UCard, UIcon } from "#components";
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { locale } = useLanguage();

const myJourney = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.about.story;
});
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
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
  margin-bottom: 20px;
}

.story_title {
  text-align: center;
}

.story_icon {
  width: 24px;
  height: 24px;
  color: $primary-color;
}

.story_buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
}

.btn {
  height: 40px;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  padding-inline: 15px;
  padding-block: 5px;
  box-sizing: border-box;
  font-weight: 400;

  &:hover {
    font-weight: 400;
  }
}

.btn-project {
  background-color: $white;
  border: 2px solid $primary-color;
  color: $text-color;

  &:hover {
    background-color: $secondary-color;
  }
}

.btn-projects {
  background-color: $primary-color;
  color: $white;

  &:hover {
    background-color: $third-color;
  }
}

@media (min-width: 500px) {
  .story_buttons {
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  }
}

@media (min-width: $breakpoint-tablet) {
  .section {
    margin-bottom: 80px;
  }
}

@media (min-width: $breakpoint-desktop) {
  .story_cards {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
}
</style>
