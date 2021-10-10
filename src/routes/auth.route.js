import express from "express";
const authRouter = express.Router();

import { validateRegisterUser, validateLoginUser } from "../validators/user.js";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

authRouter.post("/register", validateRegisterUser, registerUser);
authRouter.post("/login", validateLoginUser, loginUser);

export default authRouter;