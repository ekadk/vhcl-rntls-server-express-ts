import { Router } from "express";
import { authRouter } from "./features/auth";
import { userAuthGuard } from "./features/auth/authGuard";
import { userRouter } from "./features/user";

const router = Router();
router.use("/auth", authRouter);

router.use(userAuthGuard);
router.use("/me", userRouter);

export default router;
