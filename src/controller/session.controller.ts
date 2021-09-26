import { Response, Request } from "express";
import { log } from "../logger";
import { validatePassword, createSession } from "../service";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  try {
    // Validates password
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send("Invalid username or password");
    }

    // Create a session
    const session = await createSession(user._id, req.get("user-agent") || "");
    return session;
  } catch (error) {
    const { message } = error as Error;
    log.error(error as Error);
    return { message: `createUserSession: ${message}` };
  }
};
