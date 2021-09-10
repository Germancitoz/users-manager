"use strict";

import dotenv from "dotenv";
dotenv.config();

const config = {
    server: {
        URL: process.env.SERVER_URL || "http://localhost",
        PORT: process.env.SERVER_PORT || 3000,
    },
    database: {
        URL: process.env.DATABASE_URL || "mongodb://localhost:27017/testing",
    },
};
export default config;
