import { beforeEach, describe, expect, test, vi } from 'vitest';

const { sendMailMock } = vi.hoisted(() => ({
  sendMailMock: vi.fn(),
}));

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: sendMailMock,
    })),
  },
}));

import { sendContactEmails } from '../services/emailService.js';

const contact = {
  firstName: 'Max',
  lastName: 'Muster',
  email: 'max@example.com',
  message: 'Ich möchte mehr Informationen.',
  requestType: 'membership',
  planId: 'adults',
};

describe('sendContactEmails', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    process.env.SMTP_HOST = 'smtp-relay.brevo.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'test-user';
    process.env.SMTP_PASSWORD = 'test-password';
    process.env.SMTP_FROM = 'info@strikebull.ch';
    process.env.ADMIN_EMAIL = 'strikebull@mail.ch';
  });

  test('should send email to user and admin', async () => {
    sendMailMock.mockResolvedValue({
      messageId: 'test-message-id',
    });

    await sendContactEmails(contact);

    expect(sendMailMock).toHaveBeenCalledTimes(2);
  });

  test('should send correct email to user', async () => {
    sendMailMock.mockResolvedValue({
      messageId: 'test-message-id',
    });

    await sendContactEmails(contact);

    expect(sendMailMock).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        from: {
          name: 'Strikebull MMA Club',
          address: 'info@strikebull.ch',
        },
        to: 'max@example.com',
        subject: 'Vielen Dank für Ihre Anfrage',
        replyTo: 'strikebull@mail.ch',
        html: expect.any(String),
        text: expect.any(String),
      }),
    );
  });

  test('should send correct email to admin', async () => {
    sendMailMock.mockResolvedValue({
      messageId: 'test-message-id',
    });

    await sendContactEmails(contact);

    expect(sendMailMock).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        from: {
          name: 'Strikebull MMA Club',
          address: 'info@strikebull.ch',
        },
        to: 'strikebull@mail.ch',
        subject: 'Neue Kontaktanfrage | Strikebull MMA Club',
        replyTo: 'max@example.com',
        html: expect.any(String),
        text: expect.any(String),
      }),
    );
  });

  test('should include contact data in generated HTML', async () => {
    sendMailMock.mockResolvedValue({
      messageId: 'test-message-id',
    });

    await sendContactEmails(contact);

    const userEmail = sendMailMock.mock.calls[0][0];
    const adminEmail = sendMailMock.mock.calls[1][0];

    expect(userEmail.html).toContain('Max');

    expect(adminEmail.html).toContain('Max');
    expect(adminEmail.html).toContain('Muster');
    expect(adminEmail.html).toContain('max@example.com');
    expect(adminEmail.html).toContain('Ich möchte mehr Informationen.');
  });

  test('should reject when SMTP fails', async () => {
    sendMailMock.mockRejectedValue(new Error('SMTP unavailable'));

    await expect(sendContactEmails(contact)).rejects.toThrow(
      'SMTP unavailable',
    );
  });
});
