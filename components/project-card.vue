<template>
  <NuxtLink
    v-for="(card, index) in cards"
    :key="index"
    :to="localePath(card.to)"
  >
    <UCard class="card">
      <section>
        <h3>{{ card.title }}</h3>
        <p class="project_description">{{ card.description }}</p>
      </section>
      <section class="stack-badges">
        <UBadge
          v-for="(stack, stackIndex) in card.stack"
          :key="stackIndex"
          size="lg"
          color="neutral"
          variant="outline"
        >
          {{ stack.name || stack }}
          <UIcon
            :name="stack.icon || 'i-lucide-rocket'"
            class="stack_icon"
            :style="{ color: '#70af7a' }"
          />
        </UBadge>
      </section>
    </UCard>
  </NuxtLink>
</template>

<script setup>
const localePath = useLocalePath();

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.card {
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  &:hover {
    box-shadow: $shadow;
    transform: scale(1.01);
  }
}

.project_description {
  margin-block: 20px;
}

.stack-badges {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.stack_icon {
  width: 20px;
  height: 20px;
}
</style>
