import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import contactsRoutes from './routes/contactsRoutes.js';
import { errors } from 'celebrate';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 5003;
app.use(helmet());

app.use(logger);
app.use(express.json({ limit: '100kb' }));
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(contactsRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App has been started on port ${PORT} `);
});
