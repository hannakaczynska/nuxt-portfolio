<template>
  <footer>
    <p class="footer_withLove small">{{ $t("footer.madeWith") }}</p>
    <div class="footer_content">
      <p class="footer_copy small">© 2025 Hanna Kaczyńska</p>
      <nav class="social-icons" :aria-label="lang === 'en' ? 'Social media links' : 'Linki do mediów społecznościowych'">
        <a
          href="https://github.com/hannakaczynska"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="lang === 'en' ? 'Open my GitHub profile' : 'Otwórz mój profil GitHub'"
        >
          <UIcon name="simple-icons:github" />
        </a>
        <a
          href="https://www.linkedin.com/in/hanna-kaczy%C5%84ska-0b7247224/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="lang === 'en' ? 'Open my LinkedIn profile' : 'Otwórz mój profil LinkedIn'"
        >
          <UIcon name="simple-icons:linkedin" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from "~/composables/useLanguage";
const { lang } = useLanguage();
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
  color: $dark-grey-color;
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
    color: $dark-grey-color;
    transition: color 0.25s ease-out;

    &:hover {
      color: $third-color;
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
