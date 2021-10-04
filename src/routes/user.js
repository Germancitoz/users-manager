"use strict";

import express from "express";
const userRouter = express.Router();

import auth from "../middleware/auth.js";
import { validateCreateUser } from "../validators/user.js";
import {
    createUser,
    getUserById,
    getAllUsers,
    deleteUser,
} from "../controllers/user.js";

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/create", auth, validateCreateUser, createUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
