import express from "express";
const userRouter = express.Router();

import auth from "../middleware/auth.js";
import { validateRegisterUser, validateLoginUser } from "../validators/user.js";
import {
    registerUser,
    loginUser,
    getUserById,
    getAllUsers,
    deleteUser,
} from "../controllers/user.js";

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/register", validateRegisterUser, registerUser);
userRouter.post("/login", validateLoginUser, loginUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
