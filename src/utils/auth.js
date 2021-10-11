import jwt from "jsonwebtoken";
import { authConfig } from "../config/index.js";

export const createToken = (user) => {
    const {password, ...other} = user._doc;
    return jwt.sign(other, 
        authConfig.SECRET, {
        expiresIn: authConfig.EXPIRE_TIME,
    });
};
