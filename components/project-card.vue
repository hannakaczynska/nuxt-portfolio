<template>
    <NuxtLink v-for="(card, index) in cards" :key="index" :to="card.to">
      <UCard>
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
          <UIcon :name="stack.icon || 'i-lucide-rocket'" class="stack_icon" :style="{ color: '#70af7a' }" />
        </UBadge>
    </section>
      </UCard>
       </NuxtLink>
</template>

<script setup>
import { UCard, UBadge, UIcon } from '#components';
const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
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
