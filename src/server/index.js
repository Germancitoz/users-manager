import express from "express";
import morgan from "morgan";

const app = express();

//Middleware Basics
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


//Routes
import indexRouter from "../routes/index.route.js";
app.use("/", indexRouter);

import authRouter from "../routes/auth.route.js";
app.use("/auth", authRouter);

import userRouter from "../routes/user.route.js";
app.use("/user", userRouter);


//Middleware Routes
import notFound from "../middleware/notFound.js";
app.use(notFound);


export default app;
