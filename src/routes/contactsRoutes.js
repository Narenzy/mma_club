import { Router } from 'express';
import {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../controllers/contactsController.js';
import { celebrate } from 'celebrate';
import { createContactSchema } from '../validations/contactsValidation.js';
import { contactIdParamSchema } from '../validations/contactsValidation.js';
import { updateContactSchema } from '../validations/contactsValidation.js';
import { contactRateLimiter } from '../middleware/contactRateLimiter.js';

const router = Router();

router.get('/contacts', getContacts);

router.get(
  '/contacts/:contactId',
  celebrate(contactIdParamSchema),
  getContactById,
);

router.post(
  '/contacts',
  contactRateLimiter,
  celebrate(createContactSchema),
  createContact,
);

router.delete(
  '/contacts/:contactId',
  celebrate(contactIdParamSchema),
  deleteContact,
);

router.patch(
  '/contacts/:contactId',
  celebrate(updateContactSchema),
  updateContact,
);

export default router;
