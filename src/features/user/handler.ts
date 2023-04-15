import { RequestHandler } from "express";
import prisma from "../../db";

export const createUserProfileHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const userPayload = JSON.parse(req.headers.user as string);
    const profile = await prisma.userProfile.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        userId: userPayload.id,
      },
    });
    res.status(201).json({ profile });
  } catch (error) {
    next(error);
  }
};

export const getUserProfileHandler: RequestHandler = async (req, res, next) => {
  try {
    const userPayload = JSON.parse(req.headers.user as string);
    const profile = await prisma.userProfile.findUnique({
      where: { userId: userPayload.id },
    });
    if (!profile) throw USER_PROFILE_NOT_FOUND;
    res.status(200).json({ profile });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfileHandler: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const userPayload = JSON.parse(req.headers.user as string);
    const profile = await prisma.userProfile.findUnique({
      where: { userId: userPayload.id },
    });
    if (!profile) throw USER_PROFILE_NOT_FOUND;
    const updatedProfile = await prisma.userProfile.update({
      where: { userId: userPayload.id },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      },
    });
    res.status(200).json({ profile: { ...updatedProfile } });
  } catch (error) {
    next(error);
  }
};

export const USER_PROFILE_NOT_FOUND = {
  code: 404,
  name: "USER_PROFILE_NOT_FOUND",
  message: "profile not found!",
};
