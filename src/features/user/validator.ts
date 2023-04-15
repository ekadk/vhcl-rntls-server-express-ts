import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function createProfileValidator() {
  return validate([
    body("firstName").notEmpty().withMessage("firstName is required!"),
    body("lastName").notEmpty().withMessage("lastName is required!"),
    body("phoneNumber").notEmpty().withMessage("phoneNumber is required!"),
    body("address").notEmpty().withMessage("address is required!"),
  ]);
}
