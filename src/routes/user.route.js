import express from "express";
const userRouter = express.Router();

import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

import { getUserById, getAllUsers, deleteUser, updateUser } from "../controllers/user.controller.js";

userRouter.get("/", auth, getAllUsers);
userRouter.get("/:id", auth, getUserById);

userRouter.delete("/:id", [auth, admin], deleteUser);

userRouter.put("/", auth, updateUser);

export default userRouter;
