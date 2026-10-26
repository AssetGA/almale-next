"use client";

import { useState, useEffect } from "react";

const ChatWindow = ({ t, lang }) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userReady, setUserReady] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const EXPIRATION_TIME = 2 * 60 * 60 * 1000; // 2 часа

  // 📦 Проверяем localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("chat_name");
    const savedPhone = localStorage.getItem("chat_phone");
    const savedTime = localStorage.getItem("chat_timestamp");

    if (savedName && savedPhone && savedTime) {
      const now = Date.now();
      const timePassed = now - parseInt(savedTime, 10);
      if (timePassed < EXPIRATION_TIME) {
        setName(savedName);
        setPhone(savedPhone);
        setUserReady(true);
      } else {
        localStorage.removeItem("chat_name");
        localStorage.removeItem("chat_phone");
        localStorage.removeItem("chat_timestamp");
      }
    }
  }, []);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setAnimate(false);
    }
  }, [open]);

  // ✅ Улучшенная проверка телефона
  const validatePhone = (value) => {
    // Разрешаем форматы: +7..., 8..., международный формат
    const phoneRegex =
      /^(\+?\d{1,3})?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{2,}[-.\s]?\d{0,}$/;
    return phoneRegex.test(value.replace(/\s/g, ""));
  };

  const handleStartChat = async () => {
    if (name.trim() === "") return;

    if (!validatePhone(phone)) {
      setPhoneError("Введите корректный номер телефона");
      return;
    }

    setPhoneError("");
    try {
      const response = await fetch("/lib/api/chat/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: name,
          name,
          phone,
          type: "text",
          status: "send",
        }),
      });

      const data = await response.json();
      if (data.reply) {
        localStorage.setItem("chat_name", name);
        localStorage.setItem("chat_phone", phone);
        localStorage.setItem("chat_timestamp", Date.now().toString());
        setUserReady(true);
      } else {
        console.log("проблема с юзером чата");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!userReady || input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/lib/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: name,
          message: input,
          lang,
          name,
          phone,
          type: "text",
          status: "send",
        }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Ошибка соединения. Попробуйте снова.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:container xl:mx-auto">
      {/* 💬 Кнопка открытия чата */}
      <button
        onClick={() => setOpen(!open)}
        className={`chat-tab fixed top-1/2 z-50 -translate-y-1/2 px-3 py-4 text-sm text-white shadow-lg [writing-mode:vertical-rl] ltr:right-0 ltr:rounded-l-2xl rtl:left-0 rtl:rounded-r-2xl ${
          open
            ? "bg-green-light"
            : "bg-green animate-gem-glow"
        }`}
      >
        {open ? "✖ close" : "💬 " + t.chat.button}
      </button>

      {/* 🪟 Окно чата */}
      {open && (
        <div
          className={`fixed bottom-16 w-80 h-[620px] bg-white border border-gray rounded-2xl shadow-lg flex flex-col overflow-hidden z-50 transition-all duration-500 transform ltr:right-6 rtl:left-6 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Заголовок */}
          <div className="bg-green text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">{t.chat.span}</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          {/* Если данные не введены */}
          {!userReady ? (
            <div className="flex flex-col justify-center flex-1 p-4 space-y-3">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray rounded-md focus:ring-2 focus:ring-green focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Мобильный телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`p-2 border rounded-md focus:ring-2 focus:outline-none ${
                  phoneError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray focus:ring-green"
                }`}
              />
              {phoneError && (
                <p className="text-red-500 text-sm -mt-2">{phoneError}</p>
              )}
              <button
                onClick={handleStartChat}
                disabled={name.trim() === "" || phone.trim().length < 6}
                className={`mt-2 w-full py-2 rounded-md text-white transition ${
                  name.trim() !== "" && validatePhone(phone)
                    ? "bg-green hover:bg-green-dark"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Начать чат
              </button>
            </div>
          ) : (
            <>
              {/* Сообщения */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[80%] p-2 rounded-md text-sm ${
                      msg.sender === "bot"
                        ? "ms-auto bg-green text-white"
                        : "me-auto bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {/* 💭 Ожидание ответа */}
                {loading && (
                  <div className="ms-auto bg-green text-white px-3 py-2 rounded-md w-fit flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-150">●</span>
                    <span className="animate-bounce delay-300">●</span>
                  </div>
                )}
              </div>

              {/* Поле ввода */}
              <div className="p-3 border-t border-gray flex items-center gap-2 bg-white">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={loading}
                  className="flex-1 p-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-green disabled:bg-gray-100"
                  placeholder={
                    loading ? "Ожидайте ответ..." : "Введите сообщение..."
                  }
                />
                <button
                  onClick={handleSend}
                  disabled={input.trim() === "" || loading}
                  className={`px-3 py-2 rounded-md text-white transition ${
                    input.trim() === "" || loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green hover:bg-green-dark"
                  }`}
                >
                  ➤
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
