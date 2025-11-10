<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
// No script logic needed for the header
</script>

<style lang="scss" scoped>
header {
  background-color: $white;
  padding: 1rem;
}
nav a {
  margin-right: 1rem;
}
</style>
