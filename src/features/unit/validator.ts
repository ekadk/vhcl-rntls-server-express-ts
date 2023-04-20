import { body } from "express-validator";
import validate from "../../middlewares/validate";

export default function createCategoryValidator() {
  return validate([
    body("noSTNK")
      .notEmpty()
      .withMessage("noSTNK is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of category name is 255 characters!"),
    body("platNumber")
      .notEmpty()
      .withMessage("platNumber is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of category name is 255 characters!"),
    body("assemblyDate").notEmpty().withMessage("assemblyDate is required!"),
    body("purchaseDate").notEmpty().withMessage("purchaseDate is required!"),
    body("available").notEmpty().withMessage("available is required!"),
    body("modelId").notEmpty().withMessage("modelId is required!"),
    body("noSTNK")
      .notEmpty()
      .withMessage("noSTNK is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of category name is 255 characters!"),
    body("platNumber")
      .notEmpty()
      .withMessage("platNumber is required!")
      .isString()
      .isLength({ max: 255 })
      .withMessage("maximum length of category name is 255 characters!"),
    body("assemblyDate").notEmpty().withMessage("assemblyDate is required!"),
    body("purchaseDate").notEmpty().withMessage("purchaseDate is required!"),
    body("available").notEmpty().withMessage("available is required!"),
    body("modelId").notEmpty().withMessage("modelId is required!"),
  ]);
}
