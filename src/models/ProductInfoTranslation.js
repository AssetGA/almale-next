import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    productInfoId: { type: String, required: true },
    lang: { type: String, required: true },
    meta: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = models?.ProductInfoTranslation
  ? models.ProductInfoTranslation
  : model("ProductInfoTranslation", schema);
