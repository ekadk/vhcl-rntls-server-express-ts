import { Router } from "express";
import { createUserProfileHandler, getUserProfileHandler } from "./handler";
import createProfileValidator from "./validator";

const router = Router();

router.post("/profile", createProfileValidator(), createUserProfileHandler);
router.get("/profile", getUserProfileHandler);

export { router as userRouter };
