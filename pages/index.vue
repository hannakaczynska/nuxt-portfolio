<template>
  <div class="hero">
    <h1>{{ $t("hero.title") }}</h1>
    <p>{{ $t("hero.subtitle") }}</p>
    <nav class="hero-actions">
      <NuxtLink to="/about">
        <UButton variant="outline" size="lg">
          {{ $t("nav.about") }}
        </UButton>
      </NuxtLink>
      <NuxtLink to="/projects">
        <UButton color="primary" size="lg">
          {{ $t("nav.projects") }}
        </UButton>
      </NuxtLink>
    </nav>
  </div>
</template>


<style scoped>
.hero {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 500px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>

