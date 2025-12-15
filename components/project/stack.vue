<template>
  <section>
    <h3 class="section_title">Stack</h3>
    <div class="stack_container">
      <UCard v-if="frontendStack.length" class="stack_card">
        <h3 v-if="backendStack.length" class="list_title">Frontend</h3>
        <ul class="stack_list stack_list--frontend">
          <li v-for="(stack, index) in frontendStack" :key="index">
            <span class="stack_name">{{ stack.name }}</span
            >: <span>{{ stack.description }}</span>
          </li>
        </ul>
      </UCard>
      <UCard v-if="backendStack.length" class="stack_card">
        <h3 class="list_title">Backend</h3>
        <ul class="stack_list stack_list--backend">
          <li v-for="(stack, index) in backendStack" :key="index">
            <span class="stack_name">{{ stack.name }}</span
            >: <span>{{ stack.description }}</span>
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

const projectData = computed(() => {
  const data = lang.value === "en" ? enData : plData;
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

.stack_card {
  width: 90%;
  margin: 0 auto;
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

@media (min-width: $breakpoint-desktop) {
  .section_title {
    margin-bottom: 20px;
  }

  .stack_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 30px;
  }

  .stack_card {
    width: 100%;
  }

  .stack_list {
    gap: 10px;
    text-align: start;
  }

  .stack_list--frontend {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .stack_list--backend {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
}
</style>
