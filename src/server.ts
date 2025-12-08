import { config } from 'dotenv';
import type { Request, Response } from 'express';
import express from 'express';

config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Ria!');
});

app.get('/test', Auth, (req: Request, res: Response) => {
  const params = req.query.code as string;
  res.send(`test ${params}`);
});

export default app;
