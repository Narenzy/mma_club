import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMAIL_SUBJECTS = {
  userConfirmation: 'Vielen Dank für Ihre Anfrage',
  adminNotification: 'Neue Kontaktanfrage | Strikebull MMA Club',
};

const REQUIRED_ENV_VARIABLES = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'SMTP_FROM',
  'ADMIN_EMAIL',
];

const templateCache = new Map();

const validateEmailEnvironment = () => {
  const missingVariables = REQUIRED_ENV_VARIABLES.filter(
    (variable) => !process.env[variable],
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing email environment variables: ${missingVariables.join(', ')}`,
    );
  }
};

const createTransporter = () => {
  validateEmailEnvironment();

  const port = Number(process.env.SMTP_PORT);

  if (!Number.isInteger(port)) {
    throw new Error('SMTP_PORT must be a valid number.');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,

    // Port 465 uses implicit TLS.
    // Port 587 starts without implicit TLS and upgrades via STARTTLS.
    secure: port === 465,

    // For our production Brevo connection we require encryption.
    requireTLS: port !== 465,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },

    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
};

const compileEmailTemplate = async (templateName, data) => {
  let template = templateCache.get(templateName);

  if (!template) {
    const templatePath = path.resolve(__dirname, '../templates', templateName);

    const templateSource = await fs.readFile(templatePath, 'utf-8');

    template = handlebars.compile(templateSource);

    templateCache.set(templateName, template);
  }

  return template(data);
};

const sendEmail = async ({ to, subject, html, text, replyTo }) => {
  const transporter = createTransporter();

  return transporter.sendMail({
    from: {
      name: 'Strikebull MMA Club',
      address: process.env.SMTP_FROM,
    },

    to,
    replyTo,
    subject,
    text,
    html,
  });
};

export const sendContactEmails = async (contact) => {
  const {
    firstName,
    lastName,
    email,
    message = '',
    requestType,
    planId = null,
  } = contact;

  const templateData = {
    firstName,
    lastName,
    email,
    message,
    requestType,
    planId,
  };

  const [userHtml, adminHtml] = await Promise.all([
    compileEmailTemplate('user-confirmation-email.html', templateData),

    compileEmailTemplate('admin-contact-email.html', templateData),
  ]);

  const userText = `
Hallo ${firstName},

vielen Dank für Ihre Anfrage bei Strikebull MMA Club.

Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.

Freundliche Grüsse
Strikebull MMA Club
  `.trim();

  const adminText = `
Neue Kontaktanfrage

Name: ${firstName} ${lastName}
E-Mail: ${email}
Anfragetyp: ${requestType}
Tarif: ${planId ?? 'Kein Tarif ausgewählt'}
Nachricht: ${message || 'Keine Nachricht'}
  `.trim();

  const [userEmailResult, adminEmailResult] = await Promise.all([
    sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.userConfirmation,
      html: userHtml,
      text: userText,

      // Якщо користувач відповість на автоматичний лист,
      // відповідь піде адміну.
      replyTo: process.env.ADMIN_EMAIL,
    }),

    sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: EMAIL_SUBJECTS.adminNotification,
      html: adminHtml,
      text: adminText,

      // Якщо адмін натисне Reply,
      // відповідь піде користувачу.
      replyTo: email,
    }),
  ]);

  return {
    userMessageId: userEmailResult.messageId,
    adminMessageId: adminEmailResult.messageId,
  };
};
