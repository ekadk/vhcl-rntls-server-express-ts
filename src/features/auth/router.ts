import { Request, Response, Router } from "express";
import { localSignUpHandler } from "./handler";

const router = Router();

router.post("/local/signup", localSignUpHandler);

router.post("/local/signin", (req: Request, res: Response) => {
  res.status(200).json({ message: "local signin" });
});

export { router as authRouter };
