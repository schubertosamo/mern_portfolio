import { RequestHandler } from "express";
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

export const createEntries: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    const newEntry = await EntryModel.create({
      title: title,
      text: text,
    });

    res.send(201).json(newEntry);
  } catch (error) {
    next(error);
  }
};
