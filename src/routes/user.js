"use strict";

import express from "express";
const userRouter = express.Router();

import UserValidator from "../validators/user.js";
import UserController from "../controllers/user.js";

userRouter.get("/", UserController.getAll);
userRouter.get("/:id", UserController.get);

userRouter.post("/create", UserValidator.create, UserController.create);

userRouter.delete("/:id", UserController.delete);

export default userRouter;
