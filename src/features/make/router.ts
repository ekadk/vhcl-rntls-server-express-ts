import { Router } from "express";
import {
  createMakeHandler,
  editMakeByIdHandler,
  getAllMakeHandler,
  getMakeByIdHandler,
} from "./handler";
import createMakeValidator from "./validator";

const router = Router();

router.post("/", createMakeValidator(), createMakeHandler);
router.get("/", getAllMakeHandler);
router.get("/:id", getMakeByIdHandler);
router.patch("/:id", createMakeValidator(), editMakeByIdHandler);

export { router as MakeRouter };
