const { Schema, model, models } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: String, required: true },
    expiresAt: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = models?.Session ? models.Session : model("Session", schema);
