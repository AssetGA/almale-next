// app/api/auth/verify/route.js
import { NextResponse } from "next/server";
import { connectToDataBase } from "../../../../../lib/mongodb";
import User from "../../../../../models/User";
import UserChecks from "../../../../../models/UserChecks";
import randomNumber from "../../../../utils/randomNumber";
import { sendVerificationMail } from "../../../../utils/sendVerificationMail";

export async function POST(request) {
  await connectToDataBase();
  try {
    const { email, name } = await request.json(); // Извлекаем данные из тела запроса
    const userFind = await User.findOne({ email: email });
    await randomNumber.start();
    const number = randomNumber.getNumber();
    const userChecks = await UserChecks.findOne({ email: email });
    if (userFind !== null) {
      if (userChecks === null) {
        await UserChecks.create({
          name: name,
          email: email,
          num: number,
        });
      } else {
        await UserChecks.findByIdAndUpdate(
          userChecks._id,
          { num: number },
          {
            new: true,
          }
        );
      }
      sendVerificationMail(userFind, number).catch(console.error);
      return NextResponse.json({ content: null }, { status: 200 });
    } else {
      if (userChecks !== null) {
        const updateUser = await UserChecks.findByIdAndUpdate(
          userChecks._id,
          { num: number },
          {
            new: true,
          }
        );
        sendVerificationMail(updateUser, number).catch(console.error);
        return NextResponse.json({ content: null }, { status: 200 });
      } else {
        const user = await UserChecks.create({
          name: name,
          email: email,
          num: number,
        });
        sendVerificationMail(user, number).catch(console.error);
        return NextResponse.json({ content: null }, { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  await connectToDataBase();

  try {
    const { code, mobile, name, email, street, city, postalCode } =
      await request.json();
    const userFind = await User.findOne({ email: email });
    if (userFind === null) {
      const user = {
        name: name,
        email: email,
        mobile: mobile,
        street: street,
        city: city,
        postalCode: postalCode,
      };
      const checkUser = await UserChecks.findOne({ email: email });
      const a = code === checkUser.num;
      if (a) {
        try {
          await checkUser.deleteOne();
          const userNew = await User.create(user);
          const userSend = { _id: userNew._id };
          return NextResponse.json(
            {
              content: true,
              user: userSend,
              id: userNew._id,
              api: process.env.PAYMENT_URL,
            },
            { status: 200 }
          );
        } catch (error) {
          return NextResponse.json({ message: "falseUser" }, { status: 400 });
        }
      } else {
        return NextResponse.json({ message: "Unauthorize" }, { status: 400 });
      }
    } else {
      const checkUser = await UserChecks.findOne({ email: email });

      const a = code === checkUser.num;
      if (a) {
        await checkUser.deleteOne();
        return NextResponse.json(
          {
            content: true,
            user: null,
            id: userFind._id,
            api: process.env.PAYMENT_URL,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json({ message: "Unauthorize" }, { status: 400 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
