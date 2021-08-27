import express from "express";
const indexRouter = express.Router();

//Routes
import { router as usersRouter } from "./users.js"


indexRouter.use("/users", usersRouter);


export { indexRouter };