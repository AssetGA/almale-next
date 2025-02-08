"use client";
import { useEffect, useState } from "react";

export default function TimerTab() {
  const [time, setTime] = useState(0); // Время в миллисекундах
  const [isRunning, setIsRunning] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());
  const [attempt, setAttempt] = useState(1);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // Обновление каждые 10 мс
    } else {
      document.title = `⏸️ Stopped at: ${formatTime(time)}`;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, startTime]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setStartTime(Date.now() - time); // Сохранение текущего времени
      setAttempt(attempt + 1);
      setIsRunning(true);
    }
  };
  const handleRestart = () => {
    if (isRunning) {
      setIsRunning(false);
      setTime(0);
    } else {
      setTime(0);
    }
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const ms = milliseconds % 1000;
    return `${seconds}.${ms.toString().padStart(3, "0")} sec`;
  };
  console.log("time", attempt);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <hi className="text-3xl font-extrabold">
        Останови таймер на 10.000 и получи скидку 50%
      </hi>
      <p>можно пробовать 5 раз в день </p>
      <p>необходимо пройти регистрацию</p>
      <h2 className="text-4xl font-bold mb-5">Timer: {formatTime(time)}</h2>
      <div className="flex flex-row gap-4">
        <button
          onClick={handleStartStop}
          className="px-6 py-3 text-white bg-green-light rounded-lg shadow-md hover:bg-blue-700 transition"
          disabled={attempt >= 5 ? true : false}
        >
          {isRunning ? "⏸️ Stop Timer" : "▶️ Resume Timer"}
        </button>
        <button
          onClick={handleRestart}
          className="px-6 py-3 text-white bg-green-light rounded-lg shadow-md hover:bg-blue-700 transition"
          disabled={attempt >= 5 ? true : false}
        >
          Повторить
        </button>
      </div>
    </div>
  );
}
