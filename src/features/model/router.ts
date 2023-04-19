import { Router } from "express";
import {
  createModelHandler,
  editModelByIdHandler,
  getAllModelHandler,
  getModelByIdHandler,
} from "./handler";
import createModelValidator from "./validator";

const router = Router();

router.post("/", createModelValidator(), createModelHandler);
router.get("/", getAllModelHandler);
router.get("/:id", getModelByIdHandler);
router.patch("/:id", createModelValidator(), editModelByIdHandler);

export { router as ModelRouter };
