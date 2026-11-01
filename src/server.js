import 'dotenv/config';

import app from './app.js';
import { connectMongoDB } from './db/connectMongoDB.js';

const PORT = process.env.PORT || 5003;

await connectMongoDB();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App has been started on port ${PORT}`);
});
