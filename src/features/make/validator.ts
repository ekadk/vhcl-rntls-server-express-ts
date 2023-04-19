import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function createCategoryValidator() {
  return validate([
    body("name")
      .notEmpty()
      .withMessage("category name is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of category name is 255 characters!"),
  ]);
}
