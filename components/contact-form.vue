<template>
  <UForm :schema="schema" :state="state" class="contact-form" @submit="onSubmit">
    <UFormField name="name" class="form-field">
      <UInput v-model="state.name" :placeholder="locale === 'en' ? 'Name' : 'Imię'" class="form-input" />
    </UFormField>

    <UFormField name="email" class="form-field">
      <UInput v-model="state.email" type="email" placeholder="Email" class="form-input" />
    </UFormField>

    <UFormField name="message" class="form-field">
      <UTextarea :rows="12" v-model="state.message" :placeholder="locale === 'en' ? 'Your message...' : 'Twoja wiadomość...'" class="form-input" />
    </UFormField>

  <button type="submit" class="form-btn">{{ locale === 'en' ? 'Submit' : 'Wyślij' }}</button>
  </UForm>
</template>

<script setup>
import {reactive} from "vue";
import Joi from "joi";
import { useLanguage } from "~/composables/useLanguage";

const { locale } = useLanguage();


const schema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters long'
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please enter a valid email address'
  }),
  message: Joi.string().min(10).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be at least 10 characters long'
  })
});

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined
});

const onSubmit = () => {
        console.log("message:", state.value);
}
</script>


<style lang="scss" scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-block: 2rem;
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

  &:hover {
    font-weight: 400;
    background-color: $third-color;
  }
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