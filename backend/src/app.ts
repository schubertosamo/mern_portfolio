import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import Entry from "./models/entry";
import entriesRoutes from "./routes/entries";

const app = express();

app.use(express.json());

app.use("/api/entries", entriesRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occured";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
