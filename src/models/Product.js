import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    imageUrl: { type: String, required: true, maxLength: 200 },
    quantity: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = models?.Product ? models.Product : model("Product", schema);
