"use strict";

//import User from "../models/user.js";

import HttpError from "../utils/httpError.js";
import bcrypt from "bcrypt";
import User from "../models/user.js";

export default class UserController {
    static create = async (request, response) => {
        try {
            let { name, email, password, age } = request.body;
            password = await bcrypt.hash(password, 10);
            const user = new User({ name, email, password, age });
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

    static get = async (request, response) => {
        try {
            const { id } = request.params;
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

    static getAll = async (request, response) => {
        try {
            const { limit } = request.query;
            const users = await User.find({});
            const usersFixed = limit === undefined ? users : users.slice(0 , limit);
            response.status(200).json(usersFixed);
        } catch (error) {
            HttpError.send(
                response,
                400,
                `Error: controllers:user:getAll | ${error.message}`
            );
        }
    };

    static delete = async (request, response) => {
        try {
            const { id } = request.params;
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
}
