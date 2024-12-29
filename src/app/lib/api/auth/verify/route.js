import { NextResponse } from "next/server";
import { getUser } from "../../../dai";
import Order from "../../../../../models/Order";

export async function POST(request) {
  try {
    const { code, orderId } = await request.json();
    const user = await getUser();
    if (user) {
      const checkOrder = await Order.findOne({ _id: orderId.orderId });

      const a = code === checkOrder.numberCheck;
      if (a) {
        try {
          return NextResponse.json(
            {
              content: {
                content: true,
                api: process.env.PAYMENT_URL,
              },
            },
            { status: 200 }
          );
        } catch (error) {
          return NextResponse.json(
            { message: "Verify error" },
            { status: 400 }
          );
        }
      } else {
        await checkOrder.deleteOne();
        return NextResponse.json({ message: "No Verify" }, { status: 400 });
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
