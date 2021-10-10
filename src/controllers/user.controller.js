import { createToken } from "../utils/auth.js";
import bcrypt from "bcrypt";

import User from "../models/user.model.js";


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
