"use strict";

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Undefined",
        required: true,
    },
    email: {
        type: String,
        default: "Undefined",
        required: true,
    },
    password: {
        type: String,
        default: "Undefined",
        required: true,
    },
    age: {
        type: Number,
        default: 0,
        required: true
    },
}, {
    "toJSON" : {
        transform: (document, returnedObject) => {
            delete returnedObject.password;
        }
    }
});

const User = mongoose.model("User", userSchema);
export default User;
