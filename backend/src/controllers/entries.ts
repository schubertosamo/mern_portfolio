import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import EntryModel from "../models/entry";

export const getEntries: RequestHandler = async (req, res, next) => {
  try {
    // throw Error("Error occured");
    const notes = await EntryModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getEntry: RequestHandler = async (req, res, next) => {
  const entryId = req.params.entryId;
  try {
    if (!mongoose.isValidObjectId(entryId)) {
      throw createHttpError(400, "Invalid entry id");
    }
    const entry = await EntryModel.findById(entryId).exec();

    if (!entry) {
      throw createHttpError(404, "Entry not found");
    }
    res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
};

interface CreateEntryBody {
  title?: string;
  text?: string;
}

export const createEntries: RequestHandler<
  unknown,
  unknown,
  CreateEntryBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    if (!title) {
      throw createHttpError(400, "Entry must have a title");
    }
    const newEntry: CreateEntryBody = await EntryModel.create({
      title: title,
      text: text,
    });

    res.send(201).json(newEntry);
  } catch (error) {
    next(error);
  }
};

interface UpdateEntryParams {
  entryId: string;
}

interface UpdateEntry {
  title?: string;
  text?: string;
}

export const updateEntry: RequestHandler<
  UpdateEntryParams,
  unknown,
  UpdateEntry,
  unknown
> = async (req, res, next) => {
  const entryId = req.params.entryId;
  const newTitle = req.body.title;
  const newText = req.body.text;

  try {
    if (!mongoose.isValidObjectId(entryId)) {
      throw createHttpError(400, "Invalid entry id");
    }
    if (!newTitle) {
      throw createHttpError(400, "Entry must have a title");
    }

    const entry = await EntryModel.findById(entryId).exec();

    if (!entry) {
      throw createHttpError(404, "Entry not found");
    }

    entry.title = newTitle;
    entry.text = newText;

    const updatedEntry = await entry.save();

    res.status(200).json(updatedEntry);
  } catch (error) {
    next(error);
  }
};

export const deleteEntry: RequestHandler = async (req, res, next) => {
  const entryId = req.params.entryId;
  try {
    if (!mongoose.isValidObjectId(entryId)) {
      throw createHttpError(400, "Invalid entry id");
    }

    const entry = await EntryModel.findById(entryId).exec();

    if (!entry) {
      throw createHttpError(404, "Entry not found");
    }

    await EntryModel.findByIdAndRemove(entryId).exec();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
