import { Router } from "express";
import { localSignUpHandler, localSigninHandler } from "./handler";

const router = Router();

router.post("/local/signup", localSignUpHandler);
router.post("/local/signin", localSigninHandler);

export { router as authRouter };
