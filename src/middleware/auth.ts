import '../config/env.js';
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecretKey = process.env.JWT_SECRET_KEY as string;

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

const generateJWT = (req: Request, res: Response, next: NextFunction) => {
  const codeParam = req.query.code as string;
  const userParam = req.query.user as string;
  const payload = { code: codeParam, user: userParam };

  const token = jwt.sign(payload, jwtSecretKey);
  res.json({ token });
  next();
};

export { generateJWT, vaildateJWT };
