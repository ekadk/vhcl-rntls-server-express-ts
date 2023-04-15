import { Router } from "express";
import {
  createUserProfileHandler,
  getUserProfileHandler,
  updateUserProfileHandler,
} from "./handler";
import createProfileValidator from "./validator";

const router = Router();

router.post("/profile", createProfileValidator(), createUserProfileHandler);
router.get("/profile", getUserProfileHandler);
router.patch("/profile", updateUserProfileHandler);

export { router as userRouter };
