import { config as dotenvConfig } from 'dotenv';

// Load .env file
dotenvConfig();

// Validate required variables
const requiredEnvVars = ['JWT_SECRET_KEY'] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Export typed config
export const config = {
  jwtSecretKey: process.env.JWT_SECRET_KEY!, // Safe after validation
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: (process.env.NODE_ENV || 'development') as
    | 'development'
    | 'production'
    | 'test',
} as const;
