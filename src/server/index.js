import express from "express";
import cors from "cors";
import morgan from "morgan";
import { nodeConfig } from "../config/index.js";

const app = express();

//Middleware Basics
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
nodeConfig.ENV === "DEV" ? app.use(morgan("dev")) : null;

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
