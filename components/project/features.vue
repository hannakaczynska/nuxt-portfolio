<template>
  <section>
    <h3 class="section_title">
      {{ lang === "en" ? "Key features" : "Kluczowe funkcje" }}
    </h3>
    <div class="card_container">
      <UCard v-for="(feature, index) in projectFeatures" class="feature_card">
        <UIcon :name="feature.icon" class="feature_icon" aria-hidden="true" />
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
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { lang } = useLanguage();

const route = useRoute();
const projectTitle = route.params.title;

const projectFeatures = computed(() => {
  const data = lang.value === "en" ? enData : plData;
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
  color: $primary-color-light;
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

@media (min-width: $breakpoint-tablet) {
  .card_container {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
  }
  .feature_card {
    width: 100%;
  }
}

@media (min-width: $breakpoint-desktop) {
  .section_title {
    margin-bottom: 20px;
  }

  .card_container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .feature_icon {
    width: 30px;
    height: 30px;
  }
}
</style>
