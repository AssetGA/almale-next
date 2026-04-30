import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId, // ID пользователя (если есть)
      ref: "Users",
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId, // ID получателя (если есть)
      ref: "Users",
      required: false,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["text", "image", "video", "file"], // Тип сообщения
      default: "text",
    },
    status: {
      type: String,
      enum: ["sent", "delivered", "read"], // Статус сообщения
      default: "sent",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = models?.Massage ? models.Massage : model("Massage", schema);
