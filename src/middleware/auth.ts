import type { Request, Response, NextFunction } from 'express';
import app from '../server.js';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const generateJWT = (req: Request, res: Response, next: NextFunction) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    req.user = verified;
    next();

  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }

};

const vaildateJWT = (req: Request, res: Response, next: NextFunction) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);

  next();
};

export default generateJWT, vaildateJWT;
