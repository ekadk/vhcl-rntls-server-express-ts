import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  let code: number = 500;
  let message: string = "Internal server error";

  if (error.name === "VALIDATION_ERROR") {
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
