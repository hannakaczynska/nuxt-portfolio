<template>
  <div class="layout">
    <Header />
    <main :key="$route.fullPath">
        <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import { useLanguage } from '~/composables/useLanguage';

const { lang } = useLanguage();

useHead({
  htmlAttrs: {
    lang: lang.value
  }
})

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
