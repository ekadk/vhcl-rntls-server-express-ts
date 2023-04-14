import { Router } from "express";
import { localSignUpHandler, localSigninHandler } from "./handler";
import authValidator from "./validator";

const router = Router();

router.post("/local/signup", authValidator(), localSignUpHandler);
router.post("/local/signin", authValidator(), localSigninHandler);

export { router as authRouter };
