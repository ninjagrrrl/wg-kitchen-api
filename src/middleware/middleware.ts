import { Request, Response, NextFunction } from "express";

// Middleware to log incoming requests
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.url}`);
  next();
}

// Middleware to handle errors
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(500).json({ message: "Internal Server Error" });
}
