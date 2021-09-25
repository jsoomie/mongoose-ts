import { Express, Request, Response } from "express";
import { validateRequests } from "./middleware";
import { createUserSchema } from "./schema";
import { createUserHandler } from "./controller";

export const routes = (app: Express) => {
  // Dev Check
  // GET /healthcheck
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register
  // POST /api/user
  app.post("/api/users", validateRequests(createUserSchema), createUserHandler);

  // Login
  // POST /api/session

  // Get User's sessions
  // GET /api/sessions

  // Logout
  // DELETE /api/sessions
};
