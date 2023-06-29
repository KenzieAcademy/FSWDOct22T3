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
     * Step 3: Generate a JWT access token & refresh token
     */
    const accessToken = jwt.sign({ sub: email }, keys.auth.accessTokenSecret, {
      expiresIn: keys.auth.accessTokenExp,
    });
    const refreshToken = jwt.sign(
      { sub: user._id },
      keys.auth.refreshTokenSecret,
      { expiresIn: keys.auth.refreshTokenExp }
    );

    user.refreshTokens = [...user.refreshTokens, refreshToken];

    await user.save();
    /**
     * Step 4: Attach the refresh token as a cookie
     */

    user = user.toJSON();
    delete user.passwordHash;

    res
      .cookie(keys.auth.cookieName, refreshToken, keys.auth.cookieOptions)
      .json({ token: accessToken, user });
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

    const passwordHash = await bcrypt.hash(password, keys.auth.hashRounds);
    user = await User.create({ email, passwordHash });

    user = user.toJSON();
    delete user.passwordHash;

    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function refreshTokens(req, res, next) {
  try {
    /**
     * This function will pull the refresh token from the cookie,
     * decode it, and create a new access token (assuming the refresh
     * token itself is not expired). It will send back the same response
     * structure as signin after creating a new refresh token.
     */
    const candidateRefreshToken = req.signedCookies[keys.auth.cookieName];
    if (!candidateRefreshToken) {
      return res.status(401).json({ error: "Unauthorized error" });
    }

    jwt.verify(
      candidateRefreshToken,
      keys.auth.refreshTokenSecret,
      (err, payload) => {
        if (err) {
          return res.status(401).json({ error: "Unauthorized error" });
        }

        User.findById(payload.sub).then((user) => {
          if (!user)
            return res.status(401).json({ error: "Unauthorized error" });

          if (!user.refreshTokens.includes(candidateRefreshToken))
            return res.status(401).json({ error: "Unauthorized error" });

          const accessToken = jwt.sign(
            { sub: user.email },
            keys.auth.accessTokenSecret,
            {
              expiresIn: keys.auth.accessTokenExp,
            }
          );
          const refreshToken = jwt.sign(
            { sub: user._id },
            keys.auth.refreshTokenSecret,
            { expiresIn: keys.auth.refreshTokenExp }
          );

          user.refreshTokens = user.refreshTokens.filter(
            (rt) => rt !== candidateRefreshToken
          );
          user.refreshTokens.push(refreshToken);

          user.save().then(() => {
            user = user.toJSON();
            delete user.passwordHash;

            res
              .cookie(
                keys.auth.cookieName,
                refreshToken,
                keys.auth.cookieOptions
              )
              .json({
                token: accessToken,
                user,
              });
          });
        });
      }
    );
  } catch (error) {
    next(error);
  }
}

export async function signoutAllDevices(req, res, next) {
  try {
    const { user } = req;

    user.refreshTokens = [];
    await user.save();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}
