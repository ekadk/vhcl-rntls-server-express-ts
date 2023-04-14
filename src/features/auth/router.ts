import { Request, Response, Router } from "express";

const router = Router();

router.post("/local/signup", (req: Request, res: Response) => {
  res.status(200).json({ message: "local signup" });
});

router.post("/local/signin", (req: Request, res: Response) => {
  res.status(200).json({ message: "local signin" });
});

export { router as authRouter };
