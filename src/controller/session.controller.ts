import { Response, Request } from "express";
import { log } from "logger";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  try {
    // Create Session here
  } catch (error) {
    const { message } = error as Error;
    log.error(error as Error);
    return { message: `createUserSession: ${message}` };
  }
};
