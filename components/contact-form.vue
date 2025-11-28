<template>
  <UForm
    :schema="schema"
    :state="state"
    class="contact-form"
    @submit="onSubmit"
  >
    <UFormField name="name" class="form-field">
      <UInput
        v-model="state.name"
        :placeholder="lang === 'en' ? 'Name' : 'Imię'"
        color="neutral"
        class="form-input"
      />
    </UFormField>

    <UFormField name="email" class="form-field">
      <UInput
        v-model="state.email"
        type="email"
        placeholder="Email"
        color="neutral"
        class="form-input"
      />
    </UFormField>

    <UFormField name="message" class="form-field">
      <UTextarea
        :rows="12"
        v-model="state.message"
        :placeholder="
          lang === 'en' ? 'Your message...' : 'Twoja wiadomość...'
        "
        class="form-input"
        color="neutral"
      />
    </UFormField>

    <button type="submit" class="form-btn">
      {{ lang === "en" ? "Submit" : "Wyślij" }}
    </button>
    <p v-if="status" class="form_status small">{{ status }}</p>
  </UForm>
</template>

<script setup>
import { UForm, UFormField, UTextarea, UInput } from '#components';
import emailjs from "@emailjs/browser";
import { useLanguage } from "~/composables/useLanguage";
import {createValidationSchema} from "~/composables/validationSchema";

const { lang } = useLanguage();

const config = useRuntimeConfig()

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

    status.value = lang === "en" ? "Message sent!" : "Wiadomość wysłana!";
    state.name = state.email = state.message = "";
  } catch (err) {
    console.error(err);
    status.value = lang === "en" ? "❌ Something went wrong. Please try again." : "❌ Coś poszło nie tak. Spróbuj ponownie.";
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
  transition: background-color .25s ease-out, box-shadow .25s ease-out;

  &:hover {
    font-weight: 400;
    box-shadow: $shadow;
    background-color: $third-color;
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
