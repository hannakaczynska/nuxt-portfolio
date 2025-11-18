<template>
        <section>
      <h3 class="section_title">Stack</h3>
      <div class="stack_container">
      <ul class="stack_list" v-if="frontendStack.length">
        <h3 class="list_title">Frontend</h3>
        <li v-for="(stack, index) in frontendStack" :key="index">
          <span class="stack_name">{{ stack.name }}</span
          >: <span>{{ stack.description }}</span>
        </li>
      </ul>
      <ul class="stack_list" v-if="backendStack.length">
        <h3 class="list_title">Backend</h3>
        <li v-for="(stack, index) in backendStack" :key="index">
          <span class="stack_name">{{ stack.name }}</span
          >: <span>{{ stack.description }}</span>
        </li>
      </ul>
    </div>
    </section>
    </template>

<script setup>
import {computed} from 'vue';
import { useRoute } from "vue-router";
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { locale } = useLanguage();
const route = useRoute();
const projectTitle = route.params.title;

const projectData = computed(() => {
  const data = locale.value === "en" ? enData : plData;
  return data.projects[projectTitle];
});

const frontendStack = computed(() => {
  return projectData.value?.stack?.frontend || [];
});

const backendStack = computed(() => {
  return projectData.value?.stack?.backend || [];
});
</script>

<style lang="scss" scoped>
    .section_title {
    margin-bottom: 15px;
}

.stack_container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.stack_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
}

.list_title {
    margin-bottom: 10px;
}

.stack_name {
    color: $primary-color;
    font-weight: 600;
}
</style>