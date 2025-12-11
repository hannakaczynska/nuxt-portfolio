<template>
  <div class="dots-loader">
    <div v-for="i in 3" :key="i" class="dot"></div>
  </div>
</template>

<style lang="scss" scoped>
.dots-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 120px;
}

.dot {
  width: 16px;
  height: 16px;
  background-color: $primary-color;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
</style>
