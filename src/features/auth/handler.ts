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

export { localSignUpHandler };
