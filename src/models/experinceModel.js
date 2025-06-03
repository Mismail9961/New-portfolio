import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
});

const experienceModel =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default experienceModel;
