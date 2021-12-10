import dotenv from "dotenv";
dotenv.config();

const {
  SERVER_URL,
  SERVER_PORT,

  DATABASE_URL,

  AUTH_SECRET,
  AUTH_EXPIRE_TIME,

  NODE_ENV,
} = process.env;

export const serverConfig = {
  URL: SERVER_URL,
  PORT: SERVER_PORT,
};

export const databaseConfig = {
  URL: DATABASE_URL,
};

export const authConfig = {
  SECRET: AUTH_SECRET,
  EXPIRE_TIME: AUTH_EXPIRE_TIME,
};

export const nodeConfig = {
  ENV: NODE_ENV,
};
