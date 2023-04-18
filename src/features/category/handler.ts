import { RequestHandler } from "express";
import prisma from "../../db";

export const createCategoryHandler: RequestHandler = async (req, res, next) => {
  try {
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });
    res.status(201).json({ category });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoryHandler: RequestHandler = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      where: { isDeleted: false },
    });
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

export const getCategoryByIdHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const category = await prisma.category.findFirst({
      where: { id: +req.params.id, isDeleted: false },
    });
    if (!category) throw CATEGORY_NOT_FOUND;
    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

export const editCategoryByIdHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: +req.params.id },
    });
    if (!category) throw CATEGORY_NOT_FOUND;
    res.status(200).json({ category });
    const updatedCategory = await prisma.category.update({
      where: { id: category.id },
      data: { name: req.body.name },
    });
    res.status(200).json({ category: { ...updatedCategory } });
  } catch (error) {
    next(error);
  }
};

export const CATEGORY_NOT_FOUND = {
  code: 404,
  name: "CATEGORY_NOT_FOUND",
  message: "category not found!",
};
