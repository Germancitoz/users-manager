import express from "express";
import morgan from "morgan";

//Routes
import indexRouter from "../routes/index.js";
import userRouter from "../routes/user.js";

//Middleware
import notFound from "../middleware/notFound.js";

const app = express();

//Middleware Basics
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//Routes
app.use("/", indexRouter);
app.use("/user", userRouter);

//Middleware Routes
app.use(notFound);

export default app;
