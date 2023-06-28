import jwt from "jsonwebtoken";
import keys from "../config/keys";
import User from "../models/user.model";

export default async function requireAuth(req, res, next) {
  /**
   * Step 1: Attempt to extract the bearer token from the request headers
   */
  const authHeader = req.get("authorization");
  if (!authHeader)
    return res.status(401).json({ message: "Unauthorized error" });

  const accessToken = authHeader.replace("Bearer ", "");

  jwt.verify(accessToken, keys.auth.accessTokenSecret, (err, payload) => {
    if (err) {
      if (err.name === "TokenExpiredError")
        return res.status(401).json({ error: "TokenExpiredError" });
      return res.status(401).json({ message: "Unauthorized error" });
    }

    if (!payload.sub)
      return res.status(401).json({ message: "Unauthorized error" });

    User.findOne({ email: payload.sub }).then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Unauthorized error" });
      }

      req.user = user;
      next();
    });
  });
}
