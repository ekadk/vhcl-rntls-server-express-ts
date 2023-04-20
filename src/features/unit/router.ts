import { Router } from "express";
import {
  createUnitHandler,
  editUnitByIdHandler,
  getAllUnitHandler,
  getUnitByIdHandler,
} from "./handler";
import createUnitValidator from "./validator";

const router = Router();

router.post("/", createUnitValidator(), createUnitHandler);
router.get("/", getAllUnitHandler);
router.get("/:id", getUnitByIdHandler);
router.patch("/:id", createUnitValidator(), editUnitByIdHandler);

export { router as categoryRouter };
