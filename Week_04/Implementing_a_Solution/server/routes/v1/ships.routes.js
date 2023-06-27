import { Router } from "express";
import {
  handleCreateShip,
  handleFindShips,
} from "../../controllers/v1/ship.controller";
import { requestHandler } from "../../utils/requestHandler";
import {
  handleCreateShipParams,
  handleFindShipsParams,
} from "../../utils/paramHandlers";
import { validateCreateShip } from "../../utils/requestValidators";

/**
 * PREFIXED URL: "/api/v1/ships"
 */
const router = Router();

router
  .route("/")
  .get(requestHandler(handleFindShips, handleFindShipsParams))
  .post(
    validateCreateShip,
    requestHandler(handleCreateShip, handleCreateShipParams)
  );

export default router;
