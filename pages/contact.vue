<template>
  <UCard class="card">
    <LoadingSpinner v-if="!pageReady" />
    <transition v-if="transitionEnabled" name="fade" mode="out-in">
      <div v-if="pageReady" class="contact">
        <section class="contact_section">
          <h1>{{ $t("contact.title") }}</h1>
          <h2 class="contact_subtitle">{{ $t("contact.subtitle") }}</h2>
          <div class="contact_email-container">
            <a href="mailto:hanna.kaczynska.dev@gmail.com" class="contact_email"
              >hanna.kaczynska.dev@gmail.com</a
            >
            <button
              type="button"
              class="copy-button"
              @click="copyIcon"
              :aria-label="
                isCopied
                  ? lang === 'en'
                    ? 'Email address copied'
                    : 'Adres e-mail skopiowany'
                  : lang === 'en'
                  ? 'Copy email address'
                  : 'Skopiuj adres e-mail'
              "
            >
              <UIcon
                name="i-lucide-copy"
                size="16"
                v-if="!isCopied"
                class="copy-icon"
                aria-hidden="true"
              />
              <UIcon
                name="i-lucide-copy-check"
                size="16"
                v-if="isCopied"
                class="copy-icon"
                aria-hidden="true"
              />
            </button>
          </div>
          <nav
            class="social-icons"
            :aria-label="
              lang === 'en'
                ? 'Social media links'
                : 'Linki do mediów społecznościowych'
            "
          >
            <a
              href="https://github.com/hannakaczynska"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="
                lang === 'en'
                  ? 'Open my GitHub profile'
                  : 'Otwórz mój profil GitHub'
              "
            >
              <UIcon name="simple-icons:github" class="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-kaczy%C5%84ska-0b7247224/"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="
                lang === 'en'
                  ? 'Open my LinkedIn profile'
                  : 'Otwórz mój profil LinkedIn'
              "
              title="LinkedIn"
            >
              <UIcon name="simple-icons:linkedin" class="social-icon" />
            </a>
          </nav>
        </section>
        <transition name="slowfade">
        <img src="/svg/contact.svg" alt="" class="contact_image" width="213" height="69" />
        </transition>
        <ContactForm class="contact_form" />
      </div>
    </transition>
  </UCard>
</template>

<script setup>
import ContactForm from "~/components/contact-form.vue";
import LoadingSpinner from "~/components/loading-spinner.vue";
import { useLanguage } from "~/composables/useLanguage";
import { useRuntimeConfig } from "#app";

const { lang } = useLanguage();
const pageReady = ref(false);

const route = useRoute();
const config = useRuntimeConfig();
const transitionEnabled = usePageTransition();

const currentUrl = computed(() => `${config.public.siteUrl}${route.fullPath}`);

const { t } = useI18n();

useHead({
  title: t("contactMeta.metaTitle"),
  meta: [
    { name: "description", content: t("contactMeta.metaDescription") },
    { property: "og:title", content: t("contactMeta.metaTitle") },
    { property: "og:description", content: t("contactMeta.metaDescription") },
    { property: "og:url", content: currentUrl.value },
    { property: "og:locale", content: lang.value === "pl" ? "pl_PL" : "en_US" },
  ],
  link: [{ rel: "canonical", href: currentUrl.value }],
});

const isCopied = ref(false);

const copyIcon = async () => {
  await navigator.clipboard.writeText("hanna.kaczynska.dev@gmail.com");
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 5000);
};

onMounted(() => {
  pageReady.value = true;
});

onBeforeUnmount(() => {
  isCopied.value = false;
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slowfade-enter-active {
  transition: opacity 1s ease;
}
.slowfade-enter-from {
  opacity: 0;
}
.slowfade-enter-to {
  opacity: 1;
}

.card {
  padding: 2rem 0;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact_section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact_subtitle {
  max-width: 250px;
}

.contact_email-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contact_email {
  font-size: 11px;
  transition: color 0.25s ease-out;
  &:hover {
    font-weight: 400;
    color: $third-color;
  }
}
.copy-button {
  display: inline-flex;
  align-items: center;
}

.copy-icon {
  cursor: pointer;
  color: $light-grey-color;
}

.social-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  a {
    color: $text-color;
    transition: color 0.25s ease-out;

    &:hover {
      color: $third-color;
    }
  }
}

.social-icon {
  width: 18px;
  height: 18px;
}

.contact_image {
  display: none;
}

.contact_form {
  align-self: center;
}

@media (min-width: 400px) {
  .contact_email {
    font-size: inherit;
  }
}

@media (min-width: 500px) {
  .contact_section {
    width: 80%;
  }

  .contact_subtitle {
    max-width: none;
  }
  .contact_email-container {
    justify-content: flex-start;
    gap: 30px;
  }
}

@media (min-width: $breakpoint-tablet) {
  .contact {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr auto;
    padding: 2rem 3rem;
  }

  .contact_section {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
  }

  .contact_image {
    display: block;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .contact_form {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-self: center;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: $breakpoint-desktop) {
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px auto;
    grid-column-gap: 50px;
  }

  .contact_section {
    align-self: start;
  }

  .contact_image {
    display: block;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 70%;
    align-self: start;
  }

  .contact_form {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    width: 100%;
  }
}
</style>
