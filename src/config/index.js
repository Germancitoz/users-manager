import dotenv from "dotenv";
dotenv.config();

const {
    SERVER_URL = "http://localhost",
    SERVER_PORT = 3000,

    DATABASE_URL = "mongodb://localhost:27017/testing",

    AUTH_SECRET = "SECRET",
    AUTH_EXPIRE_TIME = 60 * 60 * 24 * 7,
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
