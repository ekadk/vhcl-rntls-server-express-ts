import { Router } from "express";
import { authRouter } from "./features/auth";
import { userAuthGuard } from "./features/auth/authGuard";
import { userRouter } from "./features/user";
import { categoryRouter } from "./features/category/router";

const router = Router();
router.use("/auth", authRouter);

router.use(userAuthGuard);
router.use("/me", userRouter);
router.use("/categories", categoryRouter);

export default router;
