const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;
mongoose.Promise = global.Promise;

const schema = new Schema({
  videoId: { type: String },
  language: { type: String, enum: ["kz", "ru", "en"], required: true },
  title: { type: String },
  description: { type: String },
});

module.exports = models?.VideoTranslation
  ? models.VideoTranslation
  : model("VideoTranslation", schema);
