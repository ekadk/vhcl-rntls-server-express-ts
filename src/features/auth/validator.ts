import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function authValidator() {
  return validate([
    body("email")
      .notEmpty()
      .withMessage("email is required!")
      .isEmail()
      .withMessage("invalid email format!"),
    body("password").notEmpty().withMessage("password is required!"),
  ]);
}
