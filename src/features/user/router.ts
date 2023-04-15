import { Router } from "express";
import { createUserProfileHandler } from "./handler";
import createProfileValidator from "./validator";

const router = Router();

router.post("/profile", createProfileValidator(), createUserProfileHandler);

export { router as userRouter };
