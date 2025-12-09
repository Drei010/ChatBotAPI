import type { Request, Response } from 'express';
import express from 'express';
import { generateJWT } from '../middleware/auth.js';
const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const { code, user } = req.body;

  if (!code || !user) {
    return res.status(400).json({ error: 'Code and user are required' });
  }

  const payload = { code, user };
  const token = generateJWT(payload);

  res.json({ token });
});

export default router;
