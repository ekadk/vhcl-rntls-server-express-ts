import { User } from "@prisma/client";
import * as jwt from "jsonwebtoken";

export const createToken = (user: User) => {
  const access_token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    "user-at-secrets"
  );

  return access_token;
};
