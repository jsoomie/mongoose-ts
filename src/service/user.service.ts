import { DocumentDefinition } from "mongoose";
import { User, UserDocument } from "../model";
import { omit } from "lodash";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(input);
  } catch (error: unknown) {
    const { message } = error as Error;
    return { message: `createUser: ${message}` };
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return false;
    }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return false;
    }

    return omit(user, "password");
  } catch (error) {
    const { message } = error as Error;
    return { message: `validatePassword: ${message}` };
  }
};
