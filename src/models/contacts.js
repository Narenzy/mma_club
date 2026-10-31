import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    planId: {
      type: String,
      enum: ['kids', 'students', 'adults', 'personal-training'],
      default: null,
    },
    requestType: {
      type: String,
      enum: ['contact', 'trial', 'membership'],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Contact = model('Contact', contactSchema);
