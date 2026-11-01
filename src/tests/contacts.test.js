import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';

import app from '../app.js';
import { Contact } from '../models/contacts.js';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
}, 300000);

afterEach(async () => {
  await Contact.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();

  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe('POST /contacts', () => {
  test('should create a contact request', async () => {
    const response = await request(app).post('/contacts').send({
      firstName: 'Max',
      lastName: 'Muster',
      email: 'max@example.com',
      message: 'Ich möchte mehr über das Training erfahren.',
      requestType: 'contact',
      planId: null,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.firstName).toBe('Max');
    expect(response.body.lastName).toBe('Muster');
    expect(response.body.email).toBe('max@example.com');
    expect(response.body.requestType).toBe('contact');
    expect(response.body.planId).toBeNull();

    const contactsCount = await Contact.countDocuments();

    expect(contactsCount).toBe(1);
  });

  test('should create a trial request', async () => {
    const response = await request(app).post('/contacts').send({
      firstName: 'Anna',
      lastName: 'Keller',
      email: 'anna@example.com',
      message: 'Ich möchte ein Probetraining buchen.',
      requestType: 'trial',
      planId: null,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.requestType).toBe('trial');
    expect(response.body.planId).toBeNull();

    const contactsCount = await Contact.countDocuments();

    expect(contactsCount).toBe(1);
  });

  test('should create a membership request', async () => {
    const response = await request(app).post('/contacts').send({
      firstName: 'Lukas',
      lastName: 'Meier',
      email: 'lukas@example.com',
      message: 'Ich möchte Mitglied werden.',
      requestType: 'membership',
      planId: 'adults',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.requestType).toBe('membership');
    expect(response.body.planId).toBe('adults');

    const contactsCount = await Contact.countDocuments();

    expect(contactsCount).toBe(1);
  });

  test('should reject membership without planId', async () => {
    const response = await request(app).post('/contacts').send({
      firstName: 'Lukas',
      lastName: 'Meier',
      email: 'lukas@example.com',
      message: 'Ich möchte Mitglied werden.',
      requestType: 'membership',
      planId: null,
    });

    expect(response.status).toBe(400);

    const contactsCount = await Contact.countDocuments();

    expect(contactsCount).toBe(0);
  });

  test('should reject invalid email', async () => {
    const response = await request(app).post('/contacts').send({
      firstName: 'Max',
      lastName: 'Muster',
      email: 'not-an-email',
      message: 'Ich möchte mehr Informationen erhalten.',
      requestType: 'contact',
      planId: null,
    });

    expect(response.status).toBe(400);

    const contactsCount = await Contact.countDocuments();

    expect(contactsCount).toBe(0);
  });
});
