import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { errors } from 'celebrate';
import helmet from 'helmet';

import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import contactsRoutes from './routes/contactsRoutes.js';

const app = express();

app.use(helmet());
app.use(logger);
app.use(express.json({ limit: '100kb' }));
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(contactsRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

export default app;
