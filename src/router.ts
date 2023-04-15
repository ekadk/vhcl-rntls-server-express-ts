import { Router } from "express";
import { authRouter } from "./features/auth";
import { userAuthGuard } from "./features/auth/authGuard";

const router = Router();
router.use("/auth", authRouter);
router.use(userAuthGuard);
router.get("/test-auth-guard", (req, res) => {
  res.status(200).json({ message: "Test auth guard" });
});

export default router;
