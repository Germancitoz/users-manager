import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform: (document, returnedObject) => {
        delete returnedObject.__v;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return new Promise(async (resolve, reject) => {
    const user = this;
    const isValid = await bcrypt.compare(password, user.password);
    resolve(isValid);
  });
};

const User = mongoose.model("User", userSchema);
export default User;
