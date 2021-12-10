import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { authConfig } from "../config/index.js";

export default async (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1]; //remove Bearer from token

  if (!token) {
    return response.status(401).json({ error: "Invalid authorization header" });
  }

  try {
    const decodedToken = jwt.verify(token, authConfig.SECRET);
    if (!decodedToken || !decodedToken.id) {
      return response
        .status(401)
        .json({ error: "Token authorization invalid" });
    }
    const user = await User.findById(decodedToken.id);
    if (user === null) {
      return response
        .status(401)
        .json({ error: "The token does not have a user" });
    }
    request.user = user;
  } catch (error) {
    return response.status(401).json({ error: error });
  }

  next();
};
