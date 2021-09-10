"use strict";

import express from "express";
import morgan from "morgan";

//Routes
import indexRouter from "../routes/index.js";
import userRouter from "../routes/user.js";

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//Routes
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
    res.status(404).json({ data: "This page not exists" });
});

export { app };
