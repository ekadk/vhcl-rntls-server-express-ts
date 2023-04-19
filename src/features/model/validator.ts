import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function createModelValidator() {
  return validate([
    body("name")
      .notEmpty()
      .withMessage("name is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of make name is 255 characters!"),

    body("pricePerDay").notEmpty().withMessage("pricePerDay is required!").isNumeric(),
    body("imgUrl").notEmpty().withMessage("imgUrl is required!"),
    body("makeId").notEmpty().withMessage("makeId is required!").isNumeric(),
    body("categoryId").notEmpty().withMessage("categoryId is required!").isNumeric(),
  ]);
}
