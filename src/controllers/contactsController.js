import createHttpError from 'http-errors';
import { Contact } from '../models/contacts.js';

export const healthCheck = async (re, res) => {
  res.status(200).json({ status: 'ok' });
};

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(contacts);
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact was not found!');
  }

  res.status(200).json(contact);
};

export const createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

export const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findOneAndDelete({ _id: contactId });

  if (!contact) {
    throw createHttpError(404, 'Contact was not found!');
  }

  res.status(201).json(contact);
};

export const updateContact = async (req, res) => {
  const { contactId } = req.params;

  const contact = await Contact.findOneAndUpdate({ _id: contactId }, req.body, {
    returnDocument: 'after',
  });

  if (!contact) {
    throw createHttpError(404, 'Contact was not found!');
  }

  res.status(200).json(contact);
};
