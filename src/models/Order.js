const { Schema, model, models } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    email: { type: String, maxLength: 200, required: true },
    mobile: { type: String, required: true, maxLength: 30 },
    street: { type: String, maxLength: 100 },
    city: { type: String, maxLength: 200 },
    productId: { type: String, maxLength: 50 },
    deliveryPrice: { type: Number, maxLength: 20 },
    postalCode: { type: String, maxLength: 20 },
    quantity: { type: Number, maxLength: 5 },
    total: { type: Number, maxLength: 20 },
    userId: { type: String, maxLength: 40 },
    numberCheck: { type: String, maxLength: 6 },
  },
  {
    timestamps: true,
  }
);

const Order = models.Order || model("Order", schema);

module.exports = Order;
