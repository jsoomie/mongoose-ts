import { Response, Request } from "express";
import { log } from "logger";
import { validatePassword } from "service"

export const createUserSessionHandler = async (req: Request, res: Response) => {
  try {
    // Validates password
    const user = await validatePassword(req.body);
    if(!user) {
      return res.status(401).send("Invalid username or password");
    }

    // Create a session for user
    const session = await 
  } catch (error) {
    const { message } = error as Error;
    log.error(error as Error);
    return { message: `createUserSession: ${message}` };
  }
};
