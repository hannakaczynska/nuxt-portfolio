<template>
  <footer>
    <p class="footer_withLove small">{{ $t("footer.madeWith") }}</p>
    <div class="footer_content">    
      <p class="footer_copy small">© 2025 Hanna Kaczyńska</p>
      <nav class="social-icons" aria-label="Social media links">
        <a
          href="https://github.com/hannakaczynska"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <UIcon name="simple-icons:github" />
        </a>
        <a
          href="https://www.linkedin.com/in/hanna-kaczy%C5%84ska-0b7247224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <UIcon name="simple-icons:linkedin" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for the footer
</script>

<style lang="scss" scoped>
footer {
  background-color: $white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

.footer_withLove {
  margin-block: 0;
}

.footer_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.footer_copy {
  margin-block: 0;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  a {
    color: $text-color;
    transition: color 0.3s ease;
    
    &:hover {
      color: $primary-color;
    }
  }
}

@media (min-width: 500px) {
  .footer_content {
    flex-direction: row;
    gap: 50px;
  }
}
</style>
