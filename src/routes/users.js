'use strict'

import express from "express";
const router = express.Router();

import { controller as userController } from "../controllers/userController.js";

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);

router.post("/create", userController.createUser);

router.delete("/:id", userController.deleteUser);


export { router };
