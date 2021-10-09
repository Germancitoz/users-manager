import jwt from "jsonwebtoken";
import { authConfig } from "../config/index.js";

export default (request, response, next) => {
    const token = request.headers["authorization"];
    if (!token) {
        return response
            .status(401)
            .json({ error: "Invalid authorization header" });
    }

    try {
        const decodedToken = jwt.verify(token, authConfig.SECRET);
        if (!decodedToken || !decodedToken.id) {
            return response
                .status(401)
                .json({ error: "Token authorization invalid" });
        }
    } catch (error) {
        return response.status(401).json({ error });
    }

    next();
};
