import './config/env.js';
import type { Request, Response } from 'express';
import express from 'express';
import { vaildateJWT, generateJWT } from './middleware/auth.js';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Ria!');
});

app.get('/test', vaildateJWT, generateJWT, (req: Request, res: Response) => {
  const params = req.query.code as string;
  res.send(`test ${params}`);
});

export default app;
