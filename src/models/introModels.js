import mongoose, { Schema } from "mongoose";

const introSchema = new Schema({
  description: { type: String, required: true },
});

const introModel =
  mongoose.models.Intro || mongoose.model("Intro", introSchema);

export default introModel;
