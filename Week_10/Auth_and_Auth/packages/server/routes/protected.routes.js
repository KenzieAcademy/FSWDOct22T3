import { Router } from "express";
import requireAuth from "../middleware/requireAuth";
import { getTest } from "../controllers/protected.controller";

const protectedRoutes = Router();

protectedRoutes
  .route("/")
  // GET /api/protected
  .get(requireAuth, getTest);

export default protectedRoutes;
