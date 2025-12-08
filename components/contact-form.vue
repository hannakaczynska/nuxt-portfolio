<template>
  <UForm
    :schema="schema"
    :state="state"
    class="contact-form"
    @submit="onSubmit"
    v-slot="{ errors }"
  >
    <UFormField name="name" class="form-field" v-slot="{ error }">
      <label for="name" class="sr-only">{{
        lang === "en" ? "Name" : "Imię"
      }}</label>
      <UInput
        id="name"
        v-model="state.name"
        :placeholder="lang === 'en' ? 'Name' : 'Imię'"
        :aria-describedby="error ? 'name-error' : null"
        color="neutral"
        class="form-input"
        required
      />
      <p
        v-if="error"
        id="name-error"
        class="sr-only"
        role="alert"
        aria-live="polite"
      >
        {{ error }}
      </p>
    </UFormField>

    <UFormField name="email" class="form-field" v-slot="{ error }">
      <label for="email" class="sr-only">{{
        lang === "en" ? "Email" : "Email"
      }}</label>
      <UInput
        id="email"
        v-model="state.email"
        type="email"
        placeholder="Email"
        color="neutral"
        class="form-input"
        :aria-describedby="error ? 'email-error' : null"
        required
      />
      <p
        v-if="error"
        id="email-error"
        class="sr-only"
        role="alert"
        aria-live="polite"
      >
        {{ error }}
      </p>
    </UFormField>

    <UFormField name="message" class="form-field" v-slot="{ error }">
      <label for="message" class="sr-only">{{
        lang === "en" ? "Your message" : "Twoja wiadomość"
      }}</label>
      <UTextarea
        id="message"
        :rows="12"
        v-model="state.message"
        :placeholder="lang === 'en' ? 'Your message...' : 'Twoja wiadomość...'"
        class="form-input"
        color="neutral"
        required
        :aria-describedby="error ? 'message-error' : null"
      />
      <p
        v-if="error"
        id="message-error"
        class="sr-only"
        role="alert"
        aria-live="polite"
      >
        {{ error }}
      </p>
    </UFormField>

    <button
      type="submit"
      class="form-btn"
      :class="{
        'form-btn--disabled':
          Object.keys(errors).length > 0 ||
          !state.name ||
          !state.email ||
          !state.message,
      }"
      :disabled="
        Object.keys(errors).length > 0 ||
        !state.name ||
        !state.email ||
        !state.message
      "
    >
      {{ lang === "en" ? "Submit" : "Wyślij" }}
    </button>
    <p v-if="status" class="form_status small" role="status" aria-live="polite">
      {{ status }}
    </p>
  </UForm>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { useLanguage } from "~/composables/useLanguage";
import { createValidationSchema } from "~/composables/validationSchema";

const { lang } = useLanguage();

const config = useRuntimeConfig();

const schema = computed(() => createValidationSchema());

const status = ref("");

const state = reactive({
  name: "",
  email: "",
  message: "",
});

const onSubmit = async () => {
  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      {
        from_name: state.name,
        from_email: state.email,
        message: state.message,
      },
      config.public.emailjsPublicKey
    );

    status.value = lang.value === "en" ? "Message sent!" : "Wiadomość wysłana!";
    state.name = state.email = state.message = "";
  } catch (err) {
    console.error(err);
    status.value =
      lang.value === "en"
        ? "❌ Something went wrong. Please try again."
        : "❌ Coś poszło nie tak. Spróbuj ponownie.";
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
}

.form-field {
  width: 100%;
}

.form-input {
  width: 100%;
}

.form-input ::v-deep(input)::placeholder,
.form-field ::v-deep(textarea)::placeholder {
  color: $dark-grey-color;
}

.form-btn {
  height: 40px;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;
  padding-inline: 15px;
  padding-block: 5px;
  box-sizing: border-box;
  font-weight: 400;
  background-color: $primary-color;
  color: $white;
  transition: background-color 0.25s ease-out, box-shadow 0.25s ease-out;

  &:hover {
    font-weight: 400;
    box-shadow: $shadow;
    background-color: $third-color;
  }
  &--disabled {
    background-color: $third-color;
    cursor: not-allowed;

    &:hover {
      background-color: $third-color;
      box-shadow: none;
    }
  }
}

.form_status {
  color: $light-grey-color;
}

@media (min-width: 500px) {
  .contact-form {
    width: 80%;
  }
}

@media (min-width: 900px) {
  .contact-form {
    width: 70%;
  }
}
</style>
