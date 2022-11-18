import 'dotenv/config';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

type HomeResponse = {
  mes: string;
};

app.get('/', (req: Request, res: Response<HomeResponse>) => {
  return res.status(200).json({ mes: 'toto' });
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Serve start on http://localhost:${port}`);
});
