"use strict";

import dotenv from "dotenv";
dotenv.config();

const {
    SERVER_URL = "http://localhost",
    SERVER_PORT = 3000,

    DATABASE_URL = "mongodb://localhost:27017/testing",

    AUTH_SECRET = "SECRET",
    AUTH_EXPIRE_TIME = 60 * 60 * 24 * 7
} = process.env;

const config = {
    server: {
        URL: SERVER_URL,
        PORT: SERVER_PORT,
    },
    database: {
        URL: DATABASE_URL,
    },
    auth: {
        SECRET: AUTH_SECRET,
        EXPIRE_TIME: AUTH_EXPIRE_TIME
    },
};

export default config;
