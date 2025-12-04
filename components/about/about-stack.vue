<template>
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
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
import plDataRaw from "~/i18n/locales/pl.json?raw";
import enDataRaw from "~/i18n/locales/en.json?raw";

const enData = JSON.parse(enDataRaw);
const plData = JSON.parse(plDataRaw);

const { lang } = useLanguage();

const myStack = computed(() => {
  const data = lang.value === "en" ? enData : plData;
  return data.about.stack;
});
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
}

.stack-badges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

@media (min-width: $breakpoint-desktop) {
  .section {
    margin-bottom: 10px;
  }

  .stack-badges {
    margin-left: 30px;
  }
}
</style>
