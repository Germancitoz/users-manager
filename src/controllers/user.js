import { createToken } from "../utils/auth.js";
import bcrypt from "bcrypt";

import User from "../models/user.js";

export const registerUser = async (request, response) => {
    const { name, email, password, age } = request.body;

    if (await isEmailRegistered(email)) {
        return response.status(409).json({
            error: "This email is already registered",
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, age });
        const token = createToken(user);
        await user.save();
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

export const getUserById = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findById(id);

        if (user === null) throw new Error("User not found");

        response.status(200).json({ error: null, user });
    } catch (error) {
        response.status(400).json({ error });
    }
};

export const getAllUsers = async (request, response) => {
    const { limit } = request.query;
    try {
        const users = await User.find({});
        const usersLimited = limit === undefined ? users : users.slice(0, limit);
        response.status(200).json({error: null, users: usersLimited});
    } catch (error) {
        response.status(400).json({ error });
    }
};

export const deleteUser = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndDelete(id);
        response.status(200).json({error: null, user});
    } catch (error) {
        response.status(400).json({ error });
    }
};

const isEmailRegistered = async (email) => {
    let user = await User.findOne({ email });
    if (user === null) return false;
    return true;
};