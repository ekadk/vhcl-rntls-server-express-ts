import { RequestHandler } from "express";
import prisma from "../../db";

export const createUserProfileHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const user = JSON.parse(req.headers.user as string);
    const profile = await prisma.userProfile.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        userId: user.id,
      },
    });
    res.status(201).json({ profile });
  } catch (error) {
    next(error);
  }
};
