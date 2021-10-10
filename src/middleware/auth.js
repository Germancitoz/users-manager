import jwt from "jsonwebtoken";
import { authConfig } from "../config/index.js";

export default (request, response, next) => {
    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({ error: "Invalid authorization header" });
    }

    const decodedToken = jwt.verify(token, authConfig.SECRET);
    if (!decodedToken || !decodedToken.user._id) {
        return response.status(401).json({ error: "Token authorization invalid" });
    }
    
    request.user = decodedToken.user;
    next();
};
