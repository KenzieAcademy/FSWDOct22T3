import keys from "../config/keys";
import User from "../models/user.model";

export default async function deleteIncomingCookie(req, res, next) {
  const candidateCookie = req.signedCookies[keys.auth.cookieName];
  if (!candidateCookie) return next();

  await User.findOneAndUpdate(
    { refreshTokens: candidateCookie },
    { $pull: { refreshTokens: candidateCookie } }
  );
  next();
}
