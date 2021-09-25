import { Response, Request } from "express";
import { createUser } from "../service/";
import { omit } from "lodash";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user, "password"));
  } catch (error) {
    const { message } = error as Error;
    return { message: `User Controller: ${message}` };
  }
};
