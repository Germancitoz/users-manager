"use strict";

//import User from "../models/user.js";

import HttpError from "../utils/httpError.js";

const data = {
    "pito" : "pito"
}

export default class UserController {
    static create = (request, response) => {
        try {
            const { name, email, password } = request.body;
            response.status(200).json({ name, email, password });
        } catch (error) {
            HttpError.send(
                response,
                400,
                `Error: controllers:user:create | ${error.message}`
            );
        }
    };

    static get = (request, response) => {
        try {
            const { id } = request.params;
            if (data[id] === undefined) {
                HttpError.send(
                    response,
                    400,
                    `User with id ${id} does not exist`
                );
            }
            response.status(200).json(data[id]);
        } catch (error) {
            HttpError.send(
                response,
                400,
                `Error: controllers:user:get | ${error.message}`
            );
        }
    };

    static getAll = (request, response) => {
        try {
            const { limit } = request.query;
            const users = limit > 0 ? data.slice(0, limit) : data;
            response.status(200).json(users);
        } catch (error) {
            HttpError.send(
                response,
                400,
                `Error: controllers:user:getAll | ${error.message}`
            );
        }
    };

    static delete = (request, response) => {
        try {
            const { id } = request.params;
            response.status(200).json({ id });
        } catch (error) {
            HttpError.send(
                response,
                400,
                `Error: controllers:user:delete | ${error.message}`
            );
        }
    };
}
