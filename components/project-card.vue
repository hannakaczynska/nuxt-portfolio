<template>
      <UCard v-for="(card, index) in cards" :key="index" v-bind="card">
        <section>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        </section>
        <section class="tech-badges">
        <UBadge
          v-for="(stack, stackIndex) in card.stack"
          :key="stackIndex"
          size="md"
          color="neutral"
          variant="outline"
        >
          {{ stack.name || stack }}
          <UIcon :name="stack.icon || 'i-lucide-rocket'" size="16" :style="{ color: '#70af7a' }" />
        </UBadge>
    </section>
      </UCard>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.tech-badges {
    display: flex;
    gap: 5px;
}
</style>