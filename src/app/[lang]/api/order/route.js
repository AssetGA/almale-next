// app/api/product/route.js
import { NextResponse } from "next/server";
import { connectToDataBase } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import Order from "../../../../models/Order";

export async function POST(request) {
  await connectToDataBase();
  try {
    const { userId, productId, deliveryPrice, quantity, total } =
      await request.json();
    const findUser = await User.findById(userId);
    if (findUser !== null) {
      try {
        const newOrder = await Order.create({
          productId: productId,
          deliveryPrice: deliveryPrice,
          quantity: quantity,
          total: total,
          userId: userId,
        });
        console.log("newOrder", newOrder);
        return NextResponse.json({ content: "send" }, { status: 200 });
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
