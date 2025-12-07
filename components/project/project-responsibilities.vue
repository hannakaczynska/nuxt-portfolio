<template>
  <section>
    <h3 class="section_title">
      {{ lang === "en" ? "My responsibilities" : "Moje zadania" }}
    </h3>
    <ul class="responsibilities_list">
      <h4 class="list_title">{{ projectResp.overview }}</h4>
      <li
        v-for="(resp, index) in projectResp.list"
        :key="index"
        class="responsibility_item"
      >
        <UIcon name="i-lucide-check" class="iteam_icon" aria-hidden="true"  />{{ resp }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { lang } = useLanguage();
const route = useRoute();
const projectTitle = route.params.title;

const projectResp = computed(() => {
  const data = lang.value === "en" ? enData : plData;
  return data.projects[projectTitle].responsibilities;
});
</script>

<style lang="scss" scoped>
.section_title {
  margin-bottom: 15px;
}
.responsibilities_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.responsibility_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.iteam_icon {
  width: 16px;
  height: 16px;
  color: $primary-color;
  flex-shrink: 0;
}

@media (min-width: $breakpoint-desktop) {
  .iteam_icon {
    width: 20px;
    height: 20px;
  }
}
</style>
