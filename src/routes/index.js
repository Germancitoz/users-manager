'use strict'

import express from "express";
import { errorUtil } from "../utils/error.js";
const indexRouter = express.Router();

//Routes

//Users
import { router as usersRouter } from "./users.js";
indexRouter.use("/users", usersRouter);

//404 Error
indexRouter.use("*", (request, response) => {
    errorUtil.send(response, 400, "Error: pageNotFound");
});

export { indexRouter };
