"use client";

import { useEffect, useState } from "react";
import botService from "../service/bot-service";
import { validator } from "../utils/validator.js";

export default function SantaLetterButton({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    type: "moroz",
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
      max: {
        message: "Напишите только Ваши пожелания",
        value: 40,
      },
    },
    contact: {
      isRequired: {
        message: "Контакт обязательно для заполнения",
      },
      max: {
        message: "Напишите только Ваши пожелания",
        value: 40,
      },
    },
    message: {
      isRequired: {
        message: "Поле обязательно для заполнения",
      },
      max: {
        message: "Напишите только Ваши пожелания",
        value: 150,
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const { content } = await botService.post(data);
      if (content.message) {
        setIsOpen(false);
        setIsOpen2(true);
      }
      setData({
        type: "moroz",
        name: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center pt-10">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-light text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green transition"
      >
        ✉️ Письмо Деду Морозу
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl md:text-sm">
          <div className=" p-6 rounded-lg shadow-lg w-96 bg-green ">
            <h2 className="text-xl font-bold mb-4 text-white">
              Письмо Деду Морозу 🎅
            </h2>
            <form>
              <label className="block mb-2 text-white">Имя деда мороза:</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded"
                placeholder="Введите имя деда мороза"
                value={data.name}
                onChange={handleChange}
                required
              />
              <div className="text-red mb-4">{`${
                errors.name === undefined ? "" : errors.name
              }`}</div>

              <label className="block mb-2 text-white">
                Контактный whatsapp или email Деда мороза:
              </label>
              <input
                type="text"
                name="contact"
                className="w-full p-2 border rounded"
                placeholder="Введите телефон или email деда мороза"
                value={data.contact}
                onChange={handleChange}
                required
              />
              <div className="text-red mb-4">{`${
                errors.contact === undefined ? "" : errors.contact
              }`}</div>

              <label className="block mb-2 text-white">
                Ваше Имя и желание:
              </label>
              <textarea
                name="message"
                className="w-full p-2 border rounded "
                placeholder="Напишите, Ваше пожелание мы доставим эту информацию по назначению! С Любовью Alma`le"
                rows="4"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="text-red mb-4">{`${
                errors.message === undefined ? "" : errors.message
              }`}</div>

              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-lg w-full hover:bg-green-light"
                disabled={!isValid}
                onClick={handleSend}
              >
                📩 Отправить письмо
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray hover:text-black border w-full px-4 py-2 rounded-lg"
            >
              ❌ Закрыть
            </button>
          </div>
        </div>
      )}
      {isOpen2 && (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="px-5 py-6">
              Ваши пожелания переданы курьерской службе!
            </h1>{" "}
            <button
              onClick={() => setIsOpen2(false)}
              className="mt-4 text-gray hover:text-black border w-full px-4 py-2 rounded-lg"
            >
              ❌ Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
