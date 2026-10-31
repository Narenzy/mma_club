import { Router } from 'express';
import {
  getContacts,
  getContactById,
  createContact,
} from '../controllers/contactsController.js';

const router = Router();

router.get('/contacts', getContacts);

router.get('/contacts/:contactId', getContactById);

router.post('/contacts', createContact);

export default router;
