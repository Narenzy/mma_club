import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value)
    ? helpers.message('Ungültiges ID-Format.')
    : value;
};

export const contactIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    contactId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createContactSchema = {
  [Segments.BODY]: Joi.object({
    firstName: Joi.string().trim().min(2).max(50).required().messages({
      'string.base': 'Der Vorname muss eine Zeichenkette sein.',
      'string.min': 'Der Vorname muss mindestens {#limit} Zeichen enthalten.',
      'string.max': 'Der Vorname darf höchstens {#limit} Zeichen enthalten.',
      'any.required': 'Der Vorname ist erforderlich.',
    }),

    lastName: Joi.string().trim().min(2).max(50).required().messages({
      'string.base': 'Der Nachname muss eine Zeichenkette sein.',
      'string.min': 'Der Nachname muss mindestens {#limit} Zeichen enthalten.',
      'string.max': 'Der Nachname darf höchstens {#limit} Zeichen enthalten.',
      'any.required': 'Der Nachname ist erforderlich.',
    }),

    email: Joi.string().trim().email().max(254).required().messages({
      'string.base': 'Die E-Mail-Adresse muss eine Zeichenkette sein.',
      'string.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'string.max':
        'Die E-Mail-Adresse darf höchstens {#limit} Zeichen enthalten.',
      'any.required': 'Die E-Mail-Adresse ist erforderlich.',
    }),

    message: Joi.string()
      .trim()
      .min(10)
      .max(1000)
      .allow('')
      .optional()
      .messages({
        'string.base': 'Die Nachricht muss eine Zeichenkette sein.',
        'string.min':
          'Die Nachricht muss mindestens {#limit} Zeichen enthalten.',
        'string.max':
          'Die Nachricht darf höchstens {#limit} Zeichen enthalten.',
      }),

    requestType: Joi.string()
      .valid('contact', 'trial', 'membership')
      .required()
      .messages({
        'any.only':
          'Der Anfragetyp muss „contact“, „trial“ oder „membership“ sein.',
        'any.required': 'Der Anfragetyp ist erforderlich.',
      }),

    planId: Joi.when('requestType', {
      is: 'membership',

      then: Joi.string()
        .valid('kids', 'students', 'adults', 'personal-training')
        .required()
        .messages({
          'string.base':
            'Bei einer Mitgliedschaft muss ein Tarif ausgewählt werden.',
          'any.only': 'Der ausgewählte Tarif ist ungültig.',
          'any.required':
            'Bei einer Mitgliedschaft muss ein Tarif ausgewählt werden.',
        }),

      otherwise: Joi.valid(null).default(null).messages({
        'any.only':
          'Bei einer Kontaktanfrage oder einem Probetraining darf kein Tarif ausgewählt sein.',
      }),
    }),
  }).unknown(false),
};

export const updateContactSchema = {
  [Segments.PARAMS]: Joi.object({
    contactId: Joi.string().custom(objectIdValidator).required(),
  }),

  [Segments.BODY]: Joi.object({
    firstName: Joi.string().trim().min(2).max(50).messages({
      'string.base': 'Der Vorname muss eine Zeichenkette sein.',
      'string.min': 'Der Vorname muss mindestens {#limit} Zeichen enthalten.',
      'string.max': 'Der Vorname darf höchstens {#limit} Zeichen enthalten.',
    }),

    lastName: Joi.string().trim().min(2).max(50).messages({
      'string.base': 'Der Nachname muss eine Zeichenkette sein.',
      'string.min': 'Der Nachname muss mindestens {#limit} Zeichen enthalten.',
      'string.max': 'Der Nachname darf höchstens {#limit} Zeichen enthalten.',
    }),

    email: Joi.string().trim().email().max(254).messages({
      'string.base': 'Die E-Mail-Adresse muss eine Zeichenkette sein.',
      'string.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'string.max':
        'Die E-Mail-Adresse darf höchstens {#limit} Zeichen enthalten.',
    }),

    message: Joi.string().trim().min(10).max(1000).allow('').messages({
      'string.base': 'Die Nachricht muss eine Zeichenkette sein.',
      'string.min': 'Die Nachricht muss mindestens {#limit} Zeichen enthalten.',
      'string.max': 'Die Nachricht darf höchstens {#limit} Zeichen enthalten.',
    }),

    requestType: Joi.string().valid('contact', 'trial', 'membership').messages({
      'any.only':
        'Der Anfragetyp muss „contact“, „trial“ oder „membership“ sein.',
    }),

    planId: Joi.string()
      .valid('kids', 'students', 'adults', 'personal-training')
      .allow(null)
      .messages({
        'any.only': 'Der ausgewählte Tarif ist ungültig.',
      }),
  })
    .min(1)
    .unknown(false),
};
