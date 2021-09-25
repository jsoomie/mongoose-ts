import { Session, SessionDocument } from "../model";
import { log } from "../logger";

export const createSession = async (userId: string, userAgent: string) => {
  try {
    const session = await Session.create({ user: userId, userAgent });
    return session;
  } catch (error) {
    const { message } = error as Error;
    log.error(error as Error);
    return { message: `createSession: ${message}` };
  }
};
