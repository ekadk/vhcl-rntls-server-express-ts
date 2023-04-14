import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let code = 500;
  let message = "Internal server error";

  if (error.name === "VALIDATION_ERROR") {
    code = error.code;
    message = error.message;
  }

  res.status(code).json({ message });
};
