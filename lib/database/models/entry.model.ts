import { Document, Schema, model, models } from "mongoose";

export interface IEntry extends Document {
  _id: string;
  material: string;
  review: string;
  createdAt: Date;
  // imageUrl: string;
  // startDateTime: Date;
  // endDateTime: Date;
  // price: string;
  // isFree: boolean;
  // url?: string;
  // category: { _id: string, name: string }
  // organizer: { _id: string, firstName: string, lastName: string }
}

const EntrySchema = new Schema({
  material: { type: String, required: true },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
  // imageUrl: { type: String, required: true },
  // startDateTime: { type: Date, default: Date.now },
  // endDateTime: { type: Date, default: Date.now },
  // price: { type: String },
  // isFree: { type: Boolean, default: false },
  // url: { type: String },
  // category: { type: Schema.Types.ObjectId, ref: "Category" },
  // organizer: { type: Schema.Types.ObjectId, ref: "User" }
});

const Entry = models.Entry || model("Entry", EntrySchema);

export default Entry;
