import type { Request, Response } from 'express';
import express from 'express';
import { vaildateJWT } from './middleware/auth.js';
import loginRoutes from './routes/login.js';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Ria!');
});

app.get('/test', (req: Request, res: Response) => {
  const params = req.query.code as string;
  res.send(`test ${params}`);
});

app.use('/api', loginRoutes);

export default app;
