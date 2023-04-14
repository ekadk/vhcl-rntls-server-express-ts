import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let code = 500;
  let message = "Internal server error";

  res.status(code).json({ message });
};
