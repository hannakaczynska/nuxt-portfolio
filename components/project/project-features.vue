<template>
  <section>
    <h3 class="section_title">
      {{ locale === "en" ? "Key features" : "Kluczowe funkcje" }}
    </h3>
    <div class="card_container">
      <UCard v-for="(feature, index) in projectFeatures" class="feature_card">
        <UIcon :name="feature.icon" class="feature_icon" />
        <h4 class="feature_title" :key="index">{{ feature.name }}</h4>
        <ul class="feature_list">
          <li
            v-for="(item, itemIndex) in feature.list"
            :key="itemIndex"
            class="feature_description"
          >
            {{ item }}
          </li>
        </ul>
      </UCard>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { locale } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;

const projectFeatures = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.projects[projectTitle].features;
});
</script>

<style lang="scss" scoped>
.section_title {
  margin-bottom: 15px;
}

.card_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature_card {
  width: 90%;
  margin: 0 auto;
}

.feature_icon {
  display: block;
  width: 24px;
  height: 24px;
  color: $primary-color;
  margin-inline: auto;
  margin-bottom: 15px;
}

.feature_title {
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
}

.feature_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature_description {
  text-align: center;
}
</style>
