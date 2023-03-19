import "dotenv/config";
import express from "express";
import Entry from "./models/note";

const app = express();

app.get("/", async (req, res) => {
  const notes = await Entry.find().exec();
  res.status(200).json(notes);
});

export default app;
