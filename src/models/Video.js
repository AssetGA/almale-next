import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    videoUrl: { type: String, required: true, maxLength: 2000 },
  },
  {
    timestamps: true,
  }
);

module.exports = models?.Video ? models.Video : model("Video", schema);
