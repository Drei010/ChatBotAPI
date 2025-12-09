import { config } from '../config/env.js';
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecretKey = config.jwtSecretKey;

const vaildateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  try {
    if (!token) throw new Error('Access Denied');

    const verified = jwt.verify(token, jwtSecretKey);
    req.user = verified;
    next();
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
};

const generateJWT = (payload: object) => {
  return jwt.sign(payload, jwtSecretKey, { expiresIn: '24h' });
};

export { generateJWT, vaildateJWT };
