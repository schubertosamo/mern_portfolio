import express from "express";
import * as EntriesController from "../controllers/entries";

const router = express.Router();

router.get("/", EntriesController.getEntries);

router.post("/", EntriesController.createEntries);

export default router;
