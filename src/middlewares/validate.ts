import { Request, RequestHandler } from "express";
import { ValidationChain, validationResult } from "express-validator";

export const VALIDATION_ERROR = {
  name: "VALIDATION_ERROR",
  code: 400,
};
const validationChecker: RequestHandler = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw { ...VALIDATION_ERROR, message: errors.array()[0].msg };
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default function validate(validator: ValidationChain[]) {
  return [...validator, validationChecker];
}
