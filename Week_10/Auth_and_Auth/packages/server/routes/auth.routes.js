import { Router } from "express";
import requireAuth from "../middleware/requireAuth";
import {
  refreshTokens,
  signinUser,
  signoutAllDevices,
  signupUser,
} from "../controllers/auth.controller";
import deleteIncomingCookie from "../middleware/deleteIncomingCookie";

const authRoutes = Router();

authRoutes
  .route("/signup")
  // POST /api/auth/signup
  .post(signupUser);

authRoutes
  .route("/refresh")
  // GET /api/auth/refresh - refreshes tokens
  .all(refreshTokens);

authRoutes
  .route("/signin")
  // POST /api/auth/signin
  .post(deleteIncomingCookie, signinUser);

authRoutes
  .route("/devicesignout")
  // ALL /api/auth/devicesignout
  .all(requireAuth, signoutAllDevices);

export default authRoutes;
