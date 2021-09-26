import { Session, SessionDocument, UserDocument } from "../model";
import { log } from "../logger";
import { LeanDocument } from "mongoose";
import config from "config";
import { sign } from "../utils/jwt.utils";

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

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") }
  );

  return accessToken;
}
