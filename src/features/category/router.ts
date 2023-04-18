import { Router } from "express";
import {
  createCategoryHandler,
  getAllCategoryHandler,
  getCategoryByIdHandler,
} from "./handler";
import createCategoryValidator from "./validator";

const router = Router();

router.post("/", createCategoryValidator(), createCategoryHandler);
router.get("/", getAllCategoryHandler);
router.get("/:id", getCategoryByIdHandler);
// router.patch("/:id");

export { router as categoryRouter };
