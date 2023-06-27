import { Router } from "express";
import { signinUser, signupUser } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes
  .route("/signup")
  // POST /api/auth/signup
  .post(signupUser);

authRoutes
  .route("/signin")
  // POST /api/auth/signin
  .post(signinUser);

export default authRoutes;
