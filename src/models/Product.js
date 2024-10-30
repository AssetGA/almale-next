const { Schema, model, models } = require("mongoose");

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

const Product = models.Product || model("Product", schema);

module.exports = Product;
