import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorRequestHandler } from "express";
import { INVALID_SIGININ } from "../features/auth";
import { VALIDATION_ERROR } from "./validate";
import { INVALID_TOKEN } from "../features/auth/authGuard";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  let code: number = 500;
  let message: string = "Internal server error";

  if (customeErrorNames.includes(error.name)) {
    code = error.code;
    message = error.message;
  }

  if (error instanceof PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      code = 400;
      const target: string | undefined | unknown = error.meta?.target;
      message = `value in ${target} is violating unique constraint`;
    }
  }

  res.status(code).json({ message });
};

const customeErrorNames = [
  INVALID_SIGININ.name,
  VALIDATION_ERROR.name,
  INVALID_TOKEN.name,
];
