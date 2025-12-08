import { JwtPayload } from 'jsonwebtoken';
declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }

    namespace NodeJS {
      interface ProcessEnv {
        JWT_SECRET_KEY: string;
        PORT?: string; // Optional
        NODE_ENV?: 'development' | 'production' | 'test';
      }
    }
  }
}
export {};
