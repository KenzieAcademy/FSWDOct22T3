import keys from "../config/keys";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function signinUser(req, res, next) {
  try {
    const { email, password } = req.body;

    /**
     * Step 1: Check that the email address is in use
     */
    let user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({
        message: "Authentication error",
        errors: {
          email: "Invalid credentials.",
        },
      });

    /**
     * Step 2: Compare the candidate password to the saved, encrypted password
     */
    const passwordIsValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordIsValid)
      return res.status(401).json({
        message: "Authentication error",
        errors: {
          email: "Invalid credentials.",
        },
      });

    /**
     * Step 3: Generate a JWT access token
     */
    const accessToken = jwt.sign({ sub: email }, keys.app.accessTokenSecret, {
      expiresIn: "7d",
    });

    user = user.toJSON();
    delete user.passwordHash;

    res.json({ token: accessToken, user });
  } catch (error) {
    next(error);
  }
}

export async function signupUser(req, res, next) {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (user)
      return res.status(422).json({
        message: "Validation error",
        errors: {
          email: "Email address already in use.",
        },
      });

    const passwordHash = await bcrypt.hash(password, keys.app.hashRounds);
    user = await User.create({ email, passwordHash });

    user = user.toJSON();
    delete user.passwordHash;

    res.json(user);
  } catch (error) {
    next(error);
  }
}
