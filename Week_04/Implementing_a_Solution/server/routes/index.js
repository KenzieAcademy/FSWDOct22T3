import { Router } from "express";
import v1Router from "./v1";

/**
 * PREFIXED URL: "/api"
 */
const router = Router();

router.use("/v1", v1Router);

export default router;
