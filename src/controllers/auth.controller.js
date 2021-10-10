import { createToken } from "../utils/auth.js";
import bcrypt from "bcrypt";

import User from "../models/user.model.js";

export const registerUser = async (request, response) => {
    const { name, email, password, age } = request.body;

    if (await isEmailRegistered(email)) {
        response.status(409).json({error: "This email is already registered"})
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword, age });
        await user.save();
        
        const token = createToken(user);
        response.status(200).json({ error: null, token });
    } catch (error) {
        response.status(400).json({ error: error });
    }
};

export const loginUser = async (request, response) => {
    const { email, password } = request.body;
    
    const user = await User.findOne({ email });
    if (!user) {
        return response.status(409).json({
            error: "This email is not registered",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return response.status(409).json({
            error: "This password is incorrect",
        });
    }

    try {
        const token = createToken(user);
        response.status(200).json({ error: null, token });
    } catch (error) {
        response.status(400).json({ error });
    }
};

const isEmailRegistered = async (email) => {
    let user = await User.findOne({ email });
    if (user === null) return false;
    return true;
};