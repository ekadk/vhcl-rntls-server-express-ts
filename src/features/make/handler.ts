import { RequestHandler } from "express";
import prisma from "../../db";

export const createMakeHandler: RequestHandler = async (req, res, next) => {
  try {
    const make = await prisma.make.create({
      data: {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
      },
    });
    res.status(201).json({ make });
  } catch (error) {
    next(error);
  }
};

export const getAllMakeHandler: RequestHandler = async (req, res, next) => {
  try {
    const makes = await prisma.make.findMany({
      where: { isDeleted: false },
    });
    res.status(200).json({ makes });
  } catch (error) {
    next(error);
  }
};

export const getMakeByIdHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const make = await prisma.make.findFirst({
      where: { id: +req.params.id, isDeleted: false },
    });
    if (!make) throw MAKE_NOT_FOUND;
    res.status(200).json({ make });
  } catch (error) {
    next(error);
  }
};

export const editMakeByIdHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const make = await prisma.make.findUnique({
      where: { id: +req.params.id },
    });
    if (!make) throw MAKE_NOT_FOUND;
    const updatedMake = await prisma.make.update({
      where: { id: make.id },
      data: { name: req.body.name },
    });
    res.status(200).json({ make: { ...updatedMake } });
  } catch (error) {
    next(error);
  }
};

export const MAKE_NOT_FOUND = {
  code: 404,
  name: "MAKE_NOT_FOUND",
  message: "make not found!",
};
