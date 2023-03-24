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
