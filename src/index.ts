import 'dotenv/config';
import path from 'path';
import express, { Express } from 'express';
import helmet from 'helmet';
import multer from 'multer';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import router from './app/routers';
import { options, cssOptions } from './app/services';

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
// ? Render static homepage of API
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');
// ? Docs swagger of API
const swaggerSpecs = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs, cssOptions));

app.use(router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Serve start on http://localhost:${port}`);
});
