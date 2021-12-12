import { createToken } from "../utils/auth.js";

import User from "../models/user.model.js";

export const registerUser = async (request, response, next) => {
  const { name, email, password, age } = request.body;

  if (await isEmailRegistered(email)) {
    return response
      .status(409)
      .json({ error: "This email is already registered", data: null });
  }

  try {
    const user = new User({ name, email, password, age });
    await user.save();
    response.status(200).json({ error: null, data: user.email });
  } catch (error) {
    response.status(400).json({ error, data: null });
  }
};

export const loginUser = async (request, response, next) => {
  const { email, password } = request.body;

  if (!(await isEmailRegistered(email))) {
    return response.status(409).json({
      error: "This email is not registered",
    });
  }

  const user = await User.findOne({ email });
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return response.status(409).json({
      error: "This password is incorrect",
    });
  }

  try {
    const token = createToken(user);
    response.status(200).json({ error: null, data: { token } });
  } catch (error) {
    response.status(400).json({ error: error.message, data: null });
  }
};

const isEmailRegistered = async (email) => {
  let user = await User.findOne({ email });
  return user ? true : false;
};
