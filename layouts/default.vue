<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '/components/Header.vue'
import Footer from '/components/Footer.vue'
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
