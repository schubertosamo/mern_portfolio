import { InferSchemaType, model, Schema } from "mongoose";

const entrySchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

type Entry = InferSchemaType<typeof entrySchema>;

export default model<Entry>("Entry", entrySchema);
