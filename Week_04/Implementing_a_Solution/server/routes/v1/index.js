import { Router } from "express";
import shipsRouter from "./ships.routes";

/**
 * PREFIXED URL: "/api/v1"
 */
const router = Router();

router.use("/ships", shipsRouter);

export default router;
