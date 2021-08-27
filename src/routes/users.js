import express from "express";
const router = express.Router();

import { controller as userController } from "../controllers/users.js";

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);

export { router };
