import { DocumentDefinition } from "mongoose";
import { User, UserDocument } from "model";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(input);
  } catch (error: unknown) {
    const { message } = error as Error;
    return { message: `User Services: ${message}` };
  }
};
