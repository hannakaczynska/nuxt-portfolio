<template>
  <div class="layout">
    <Header />
    <main :key="$route.fullPath">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-block: 1rem;
  padding-inline: 2rem;
}
</style>
