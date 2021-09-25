import { Response, Request } from "express";
import { createUser } from "../service/";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    //Create User Here
  } catch (error) {
    const { message } = error as Error;
    return { message: `User Controller: ${message}` };
  }
};
