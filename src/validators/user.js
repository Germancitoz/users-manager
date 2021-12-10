import { check, validationResult } from "express-validator";

export const validateRegisterUser = [
  check("name").exists().isString(),

  check("email").exists().isEmail(),

  check("password").isLength({ min: 10 }),

  check("age").isNumeric(),

  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    return next();
  },
];

export const validateLoginUser = [
  check("email").exists().isEmail(),

  check("password").exists(),

  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ error: errors.array() });
    }
    return next();
  },
];
