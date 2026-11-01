import type { CreateContactPayload } from '../types/contact';

export const createContact = async (payload: CreateContactPayload) => {
  const response = await fetch('http://localhost:5001/contacts', {
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
