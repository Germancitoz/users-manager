"use strict";

import HttpError from "../utils/httpError.js";
import bcrypt from "bcrypt";

import User from "../models/user.js";

const createUser = async (request, response) => {
    let { name, email, password, age } = request.body;
    password = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password, age });
    try {
        await user.save();
        response.status(200).json(user);
    } catch (error) {
        HttpError.send(
            response,
            400,
            `Error: controllers:user:create | ${error.message}`
        );
    }
};

const getUserById = async (request, response) => {
    const { id } = request.params;
    try {
        let user = await User.findById(id);
        if (user === null) user = {};
        response.status(200).json(user);
    } catch (error) {
        HttpError.send(
            response,
            400,
            `Error: controllers:user:get | ${error.message}`
        );
    }
};

const getAllUsers = async (request, response) => {
    const { limit } = request.query;
    try {
        const users = await User.find({});
        const usersFixed = limit === undefined ? users : users.slice(0, limit);
        response.status(200).json(usersFixed);
    } catch (error) {
        HttpError.send(
            response,
            400,
            `Error: controllers:user:getAll | ${error.message}`
        );
    }
};

const deleteUser = async (request, response) => {
    const { id } = request.params;
    try {
        const user = await User.findByIdAndDelete(id);
        response.status(200).json(user);
    } catch (error) {
        HttpError.send(
            response,
            400,
            `Error: controllers:user:delete | ${error.message}`
        );
    }
};

export {
    createUser,
    getUserById,
    getAllUsers,
    deleteUser,
};