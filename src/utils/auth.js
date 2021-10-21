import jwt from "jsonwebtoken";
import { authConfig } from "../config/index.js";

export const createToken = (user) => {
  const id = user._doc._id.toString();
  return jwt.sign({ id }, authConfig.SECRET, {
    expiresIn: authConfig.EXPIRE_TIME,
  });
};
