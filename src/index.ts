import 'dotenv/config';
import express, { Express } from 'express';
import helmet from 'helmet';
import multer from 'multer';

import router from './app/routers';

const app: Express = express();

// ? Server use JSON
app.use(express.json());
// ? Server read params
app.use(express.urlencoded({ extended: false }));
// ? Protect server header
app.use(helmet());
// ? Server read body (formdata, raw,...)
const upload = multer();
app.use(upload.none());

app.use(router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Serve start on http://localhost:${port}`);
});
