require("dotenv").config();
const { Telegraf } = require("telegraf");

const baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`;

const bot = new Telegraf(process.env.BOT_TOKEN);

const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=${process.env.CHAT_ID}&text=${message}`;
  const response = await fetch(url);
  return response.ok;
};

const sendMessageToPhone = async (message) => {
  bot.command("send", (ctx) => {
    ctx.telegram
      .sendMessage(process.env.CHAT_USER_ID, message)
      .then(() => console.log("Сообщение отправлено!"))
      .catch((err) => console.error("Ошибка отправки:", err));
  });
};

module.exports = {
  sendMessage,
  sendMessageToPhone,
};
