import { RequestHandler } from "express";
import prisma from "../../db";

export const createmodelHandler: RequestHandler = async (req, res, next) => {
  try {
    const model = await prisma.model.create({
      data: {
        name: req.body.name,
        pricePerDay: req.body.pricePerDay,
        imgUrl: req.body.imgUrl,
        makeId: req.body.makeId,
        categoryId: req.body.categoryId,
      },
    });
    res.status(201).json({ model });
  } catch (error) {
    next(error);
  }
};

export const getAllmodelHandler: RequestHandler = async (req, res, next) => {
  try {
    const models = await prisma.model.findMany({
      where: { isDeleted: false },
    });
    res.status(200).json({ models });
  } catch (error) {
    next(error);
  }
};

export const getmodelByIdHandler: RequestHandler = async (req, res, next) => {
  try {
    const model = await prisma.model.findFirst({
      where: { id: +req.params.id, isDeleted: false },
    });
    if (!model) throw model_NOT_FOUND;
    res.status(200).json({ model });
  } catch (error) {
    next(error);
  }
};

export const editmodelByIdHandler: RequestHandler = async (req, res, next) => {
  try {
    const model = await prisma.model.findUnique({
      where: { id: +req.params.id },
    });
    if (!model) throw model_NOT_FOUND;
    const updatedModel = await prisma.model.update({
      where: { id: model.id },
      data: {
        name: req.body.name,
        pricePerDay: req.body.pricePerDay,
        imgUrl: req.body.imgUrl,
        makeId: req.body.makeId,
        categoryId: req.body.categoryId,
      },
    });
    res.status(200).json({ model: { ...updatedModel } });
  } catch (error) {
    next(error);
  }
};

export const model_NOT_FOUND = {
  code: 404,
  name: "model_NOT_FOUND",
  message: "model not found!",
};
