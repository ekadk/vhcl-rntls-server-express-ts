import { RequestHandler } from "express";
import prisma from "../../db";

export const createUnitHandler: RequestHandler = async (req, res, next) => {
  try {
    const unit = await prisma.unit.create({
      data: {
        noSTNK: req.body.noSTNK,
        platNumber: req.body.platNumber,
        assemblyDate: req.body.assemblyDate,
        purchaseDate: req.body.purchaseDate,
        available: req.body.available,
        modelId: req.body.modelId,
      },
    });
    res.status(201).json({ unit });
  } catch (error) {
    next(error);
  }
};

export const getAllUnitHandler: RequestHandler = async (req, res, next) => {
  try {
    const units = await prisma.unit.findMany({
      where: { isDeleted: false },
    });
    res.status(200).json({ units });
  } catch (error) {
    next(error);
  }
};

export const getUnitByIdHandler: RequestHandler = async (req, res, next) => {
  try {
    const unit = await prisma.unit.findFirst({
      where: { id: req.params.id, isDeleted: false },
    });
    if (!unit) throw UNIT_NOT_FOUND;
    res.status(200).json({ unit });
  } catch (error) {
    next(error);
  }
};

export const editUnitByIdHandler: RequestHandler = async (req, res, next) => {
  try {
    const unit = await prisma.unit.findUnique({
      where: { id: req.params.id },
    });
    if (!unit) throw UNIT_NOT_FOUND;
    const updatedUnit = await prisma.unit.update({
      where: { id: unit.id },
      data: {
        noSTNK: req.body.noSTNK,
        platNumber: req.body.platNumber,
        assemblyDate: req.body.assemblyDate,
        purchaseDate: req.body.purchaseDate,
        available: req.body.available,
        modelId: req.body.modelId,
      },
    });
    res.status(200).json({ unit: { ...updatedUnit } });
  } catch (error) {
    next(error);
  }
};

export const UNIT_NOT_FOUND = {
  code: 404,
  name: "UNIT_NOT_FOUND",
  message: "unit not found!",
};
