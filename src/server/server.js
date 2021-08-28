'use strict'

import express from "express";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

import { indexRouter } from "../routes/index.js";

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(indexRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`SERVER LISTENING AT ${process.env.PORT || 3000}`);
});

export { app };
