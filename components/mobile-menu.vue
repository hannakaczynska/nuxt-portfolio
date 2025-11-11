<template>
  <nav class="mobile-menu">
      <NuxtLink to="/">{{$t("nav.home") }}</NuxtLink>
      <NuxtLink to="/about">{{$t("nav.about") }}</NuxtLink>
      <NuxtLink to="/projects">{{$t("nav.projects") }}</NuxtLink>
      <NuxtLink to="/contact">{{$t("nav.contact") }}</NuxtLink>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: $white;
  position: absolute;
  border-bottom-right-radius: 20px;
  top: 56px;
  left: 0;
  width: 100px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>