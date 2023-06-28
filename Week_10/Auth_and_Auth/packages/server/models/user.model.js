import { Schema, model } from "mongoose";
import keys from "../config/keys";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: keys.constants.email_regex,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    refreshTokens: [String],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
