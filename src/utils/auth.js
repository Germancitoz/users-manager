import jwt from "jsonwebtoken";
import { authConfig } from "../config/index.js";

export const createToken = (user) => {
    return jwt.sign({ user }, authConfig.SECRET, {
        expiresIn: authConfig.EXPIRE_TIME,
    });
};
