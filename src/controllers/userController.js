'use strict'

import { errorUtil } from "../utils/error.js";

import { User } from '../models/user.js';

const controller = {};

const data = [
    {
        name: "hola",
    },
    {
        name: "ho22a",
    },
    {
        name: "22222",
    },
];

controller.getUsers = (request, response) => {
    try {
        const { limit } = request.query;
        const users = limit > 0 ? data.slice(0, limit) : data;
        response.status(200).json(users);
    } catch (error) {
        errorUtil.send(response, 400, `Error: controllers:users:getUsers | ${error.message}`);
    }
};

controller.getUser = (request, response) => {
    try {
        const { id } = request.params;
        if (data[id] === undefined) {
            errorUtil.send(response, 404, `User with id ${id} does not exist`);
        }
        response.status(200).json(data[id]);
    } catch (error) {
        errorUtil.send(response, 400, `Error: controllers:users:getUser | ${error.message}`);
    }
};

controller.createUser = (request, response) => {
    try {
        const { name, email, password } = request.body;
        response.status(200).json({ name, email, password });
    } catch (error) {
        errorUtil.send(response, 400, `Error: controllers:users:createUser | ${error.message}`)
    }
};

controller.deleteUser = (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).json({ id });
    } catch (error) {
        errorUtil.send(response, 400, `Error: controllers:users:deleteUser | ${error.message}`);
    }
};

export { controller };
