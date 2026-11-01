import type { CreateContactPayload } from '../types/contact';

const API_URL = import.meta.env.VITE_API_URL;

export const createContact = async (payload: CreateContactPayload) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'Kontaktanfrage konnte nicht gesendet werden.',
    );
  }

  return data;
};
