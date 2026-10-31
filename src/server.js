import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import contactsRoutes from './routes/contactsRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(logger);
app.use(express.json({ limit: '100kb' }));
app.use(cors());

app.use(contactsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT} `);
});
