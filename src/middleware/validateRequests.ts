import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import { log } from "../logger";

export const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      const { message } = err as Error;
      log.error(message);
      res.status(400);
      return { message: `Validate Request: ${message}` };
    }
  };
