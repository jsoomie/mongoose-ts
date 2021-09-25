import { Express, Request, Response } from "express";

export const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register
  // POST /api/user

  // Login
  // POST /api/session

  // Get User's sessions
  // GET /api/sessions

  // Logout
  // DELETE /api/sessions
};
