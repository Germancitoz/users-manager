"use strict";

import express from "express";
const indexRouter = express.Router();

indexRouter.get("/", (request, response) => {
    response.status(200).json({ data: "Welcome to this API" });
});

export default indexRouter;
