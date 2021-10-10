import express from "express";
const userRouter = express.Router();

import auth from "../middleware/auth.js";
import { getUserById, getAllUsers, deleteUser } from "../controllers/user.controller.js";

userRouter.get("/", auth, getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.delete("/:id", deleteUser);

export default userRouter;
