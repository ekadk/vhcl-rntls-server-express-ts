import { RequestHandler } from "express";
import prisma from "../../db";
import { createToken } from "./helpers";
import * as argon from "argon2";

const localSignUpHandler: RequestHandler = async (req, res, next) => {
  try {
    const hash = await argon.hash(req.body.password);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hash,
      },
    });
    const access_token = createToken(user);
    res.status(201).json({ access_token });
  } catch (error) {
    next(error);
  }
};

const localSigninHandler: RequestHandler = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user) throw INVALID_SIGININ;
    const passwordIsValid = await argon.verify(
      user.password,
      req.body.password
    );
    if (!passwordIsValid) throw INVALID_SIGININ;
    const access_token = createToken(user);
    res.status(200).json({ access_token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const INVALID_SIGININ = {
  code: 403,
  name: "INVALID_SIGNIN",
  message: "invalid email or password!",
};

export { localSignUpHandler, localSigninHandler, INVALID_SIGININ };
