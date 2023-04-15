import { RequestHandler } from "express";
import { verifyToken } from "./helpers";
import { JsonWebTokenError } from "jsonwebtoken";
import prisma from "../../db";

export const userAuthGuard: RequestHandler = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw INVALID_TOKEN;
    const [_, access_token] = req.headers.authorization?.split(" ");

    const payload = verifyToken(access_token);
    if (!payload) throw INVALID_TOKEN;

    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) throw INVALID_TOKEN;

    req.headers.user = JSON.stringify({
      id: user.id,
      email: user.email,
    });

    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) next(INVALID_TOKEN);
    next(error);
  }
};

export const INVALID_TOKEN = {
  code: 403,
  name: "INVALID_USER_TOKEN",
  message: "invalid token",
};
