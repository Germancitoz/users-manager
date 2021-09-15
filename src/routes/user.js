"use strict";

import express from "express";
const userRouter = express.Router();

import UserController from "../controllers/user.js";

userRouter.get("/", UserController.getAll);
userRouter.get("/:id", UserController.get);

userRouter.post("/create", UserController.create);

userRouter.delete("/:id", UserController.delete);

export default userRouter;
