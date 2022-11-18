import 'dotenv/config';
import express, { Express } from 'express';

import router from './app/routers';

const app: Express = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Serve start on http://localhost:${port}`);
});
