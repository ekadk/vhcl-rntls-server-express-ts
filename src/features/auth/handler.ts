import { RequestHandler } from "express";
import prisma from "../../db";

const localSignUpHandler: RequestHandler = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(201).json({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    next(error);
  }
};

const localSigninHandler: RequestHandler = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user)
      throw { name: "INVALID_SIGNIN", message: "invalid email or password!" };

    if (req.body.password !== user.password)
      throw { name: "INVALID_SIGNIN", message: "invalid email or password!" };

    res.status(200).json({ message: "signed in!" });
  } catch (error) {
    next(error);
  }
};

export { localSignUpHandler, localSigninHandler };
