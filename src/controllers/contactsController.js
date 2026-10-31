import { Contact } from '../models/contacts.js';

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    return res.status(404).json({ message: 'Contact was not found!' });
  }

  res.status(200).json(contact);
};
