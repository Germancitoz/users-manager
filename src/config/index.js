"use strict";

import dotenv from "dotenv";
dotenv.config();

const {
    SERVER_URL = "http://localhost",
    SERVER_PORT = 3000,
    DATABASE_URL = "mongodb://localhost:27017/testing",
} = process.env;

const config = {
    server: {
        URL: SERVER_URL,
        PORT: SERVER_PORT,
    },
    database: {
        URL: DATABASE_URL,
    },
};

export default config;
