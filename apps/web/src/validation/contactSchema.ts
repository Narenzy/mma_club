import * as yup from "yup";

export const contactSchema = yup.object({
  firstName: yup
    .string()
    .required("Vorname ist erforderlich")
    .min(2, "Mindestens 2 Zeichen")
    .max(50, "Maximal 50 Zeichen")
    .matches(/^[\p{L}\p{M}'’ -]+$/u, "Vorname darf keine Zahlen enthalten"),

  lastName: yup
    .string()
    .required("Nachname ist erforderlich")
    .min(2, "Mindestens 2 Zeichen")
    .max(50, "Maximal 50 Zeichen")
    .matches(/^[\p{L}\p{M}'’ -]+$/u, "Nachname darf keine Zahlen enthalten"),

  email: yup
    .string()
    .required("E-Mail ist erforderlich")
    .email("Ungültige E-Mail-Adresse")
    .max(254, "E-Mail ist zu lang"),

  message: yup
    .string()
    .notRequired()
    .test(
      "message-min-length",
      "Mindestens 10 Zeichen",
      (value) => !value?.trim() || value.length >= 10,
    )
    .max(1000, "Maximal 1000 Zeichen"),
});
