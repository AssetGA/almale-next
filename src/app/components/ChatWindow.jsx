"use client";

import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useRouter } from "next/navigation";

const ChatWindow = ({ t }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const { userId } = useAppSelector((state) => state.user);
  const router = useRouter();

  const goToPage = () => {
    router.push("/login"); // Переход на "/new-page"
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Добавление сообщения пользователя
    setMessages((prev) => [...prev, { text: input }]);
    setInput("");

    // Отправка сообщения на сервер
    const response = await fetch("/lib/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: userId,
        message: input,
        type: "text",
        status: "send",
      }),
    });

    const data = await response.json();

    // Добавление ответа бота
    setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
  };

  return (
    <>
      {/* Кнопка для открытия/закрытия чата */}

      <button
        onClick={() => (userId !== null ? setOpen(!open) : goToPage())}
        className="fixed bottom-6 right-6 bg-green-light hover:bg-green text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        💬 {t.chat.button}
      </button>

      {/* Окно чата */}
      {open && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white border border-gray rounded-lg shadow-lg flex flex-col overflow-hidden z-50">
          {/* Заголовок чата */}
          <div className=" text-black p-3 flex justify-between items-center">
            <span>{t.chat.span}</span>
            <button onClick={() => setOpen(false)} className="text-white">
              ✖
            </button>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-2 rounded-md text-sm ${
                  msg.sender === "bot"
                    ? "ml-auto bg-green text-white"
                    : "mr-auto text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Поле ввода */}
          <div className="p-3 border-t border-gray flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Введите сообщение..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-green transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
