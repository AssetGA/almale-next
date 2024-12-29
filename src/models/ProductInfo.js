import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    productId: { type: String, required: true },
    src: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = models?.ProductInfo
  ? models.ProductInfo
  : model("ProductInfo", schema);
