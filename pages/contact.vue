<template>
  <UCard class="card">
    <div class="contact">
      <section class="contact_section">
        <h1>{{ $t("contact.title") }}</h1>
        <h2 class="contact_subtitle">{{ $t("contact.subtitle") }}</h2>
        <div class="contact_email-container">
          <a href="mailto:hanna.kaczynska.dev@gmail.com" class="contact_email"
            >hanna.kaczynska.dev@gmail.com</a
          >
          <UIcon
            name="i-lucide-copy"
            size="16"
            v-if="!isCopied"
            @click="copyIcon"
            class="copy-icon"
          />
          <UIcon
            name="i-lucide-copy-check"
            size="16"
            v-if="isCopied"
            @click="copyIcon"
            class="copy-icon"
          />
        </div>
        <nav class="social-icons" aria-label="Social media links">
          <a
            href="https://github.com/hannakaczynska"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <UIcon name="simple-icons:github" class="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-kaczy%C5%84ska-0b7247224/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <UIcon name="simple-icons:linkedin" class="social-icon" />
          </a>
        </nav>
      </section>
      <img :src="contact" alt="Work Together Image" class="contact_image" />
      <ContactForm class="contact_form" />
    </div>
  </UCard>
</template>

<script setup>
import { UCard, UIcon } from '#components';
import ContactForm from "~/components/contact-form.vue";
import contact from "~/assets/svg/contact.svg";

const isCopied = ref(false);

const copyIcon = async () => {
  await navigator.clipboard.writeText("hanna.kaczynska.dev@gmail.com");
  isCopied.value = true;
  setTimeout(() => (isCopied.value = false), 5000);
};

onBeforeUnmount(() => {
  isCopied.value = false;
});
</script>

<style lang="scss" scoped>
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
  &:hover {
    font-weight: 400;
    color: $third-color;
  }
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
    transition: color 0.3s ease;

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
