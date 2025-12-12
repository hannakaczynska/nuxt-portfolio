import Joi from "joi";

export const createValidationSchema = (lang: string) => {
  return Joi.object({
    name: Joi.string().min(2).required().messages({
      "string.empty": lang === "en" ? "Name is required" : "Imię jest wymagane",
      "string.min": lang === "en" ? "Name must be at least 2 characters long" : "Imię musi mieć co najmniej 2 znaki",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": lang === "en" ? "Email is required" : "Email jest wymagany",
        "string.email": lang === "en" ? "Please enter a valid email address" : "Proszę wprowadzić poprawny adres email",
      }),
    message: Joi.string().min(10).required().messages({
      "string.empty": lang === "en" ? "Message is required" : "Wiadomość jest wymagana",
      "string.min": lang === "en" ? "Message must be at least 10 characters long" : "Wiadomość musi mieć co najmniej 10 znaków",
    }),
  });
};