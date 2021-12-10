import express from "express";
const indexRouter = express.Router();

indexRouter.get("/", (request, response, next) => {
  response.status(200).json({ error: null, data: "Welcome to this API" });
});
export default indexRouter;
