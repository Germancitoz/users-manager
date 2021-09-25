"use strict";

import { check, validationResult } from "express-validator";
import HttpError from "../utils/httpError.js";

const UserValidator = {};

UserValidator.create = [
    check("name")
    .exists()
    .isString(),

    check("email")
    .exists()
    .isEmail(),

    check("password")
    .isLength({min:10}),

    check("age")
    .isNumeric(),

    (request, response, next) => {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return HttpError.send(response, 400, {errors: errors.array()});
      }
      return next();
    }
];

export default UserValidator;