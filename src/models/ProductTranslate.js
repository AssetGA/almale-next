const { Schema, model, models } = require("mongoose");

const schema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  language: { type: String, enum: ["kz", "ru", "en"], required: true },
  name: { type: String, required: true },
  title: { type: String },
  description: { type: String, required: true },
  diameter: { type: String },
  size: { type: String },
  about: { type: String },
  keywords: { type: String },
  descriptionMeta: { type: String },
});

const ProductTranslation =
  models.ProductTranslation || model("ProductTranslation", schema);

module.exports = ProductTranslation;
