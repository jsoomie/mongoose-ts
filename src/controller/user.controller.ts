import { createUser } from "../service/";

export const createUserHandler = async () => {
  try {
    //Create User Here
  } catch (error) {
    const { message } = error as Error;
    return { message: `User Controller: ${message}` };
  }
};
