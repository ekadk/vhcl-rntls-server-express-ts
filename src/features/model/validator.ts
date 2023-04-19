import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function createMakeValidator() {
  return validate([
    body("name")
      .notEmpty()
      .withMessage("make name is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of make name is 255 characters!"),
    body("imgUrl").notEmpty().withMessage("make imageUrl is required!"),
  ]);
}
