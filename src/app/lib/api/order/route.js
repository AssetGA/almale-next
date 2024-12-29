// app/api/product/route.js
import { NextResponse } from "next/server";
import Order from "../../../../models/Order";
import Users from "../../../../models/User";
import { getUser } from "../../dai";
import randomNumber from "../../../utils/randomNumber";
import { sendVerificationMail } from "../../../utils/sendVerificationMail";
const { ObjectId } = require("mongodb");

export async function POST(request) {
  const user = await getUser();
  try {
    const {
      name,
      email,
      mobile,
      street,
      city,
      userId,
      productId,
      deliveryPrice,
      quantity,
      total,
      postalCode,
    } = await request.json();

    const findUser = await Users.findById(userId);
    if (findUser !== null && user._id.equals(new ObjectId(userId))) {
      try {
        await randomNumber.start();
        const number = randomNumber.getNumber();
        console.log("number", number, typeof number);
        const newOrder = await Order.create({
          name: name,
          email: email,
          mobile: mobile,
          street: street,
          city: city,
          productId: productId,
          deliveryPrice: deliveryPrice,
          postalCode: postalCode,
          quantity: quantity,
          total: total,
          userId: userId,
          numberCheck: number,
        });
        console.log("newOrder", newOrder);
        sendVerificationMail(findUser, number).catch(console.error);
        return NextResponse.json({ orderId: newOrder._id }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ message: "falseUser" }, { status: 400 });
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
