import { NextResponse } from "next/server";
import Order from "../../../../../models/Order";
import { getUser } from "../../../dai";

export async function DELETE(request, { params }) {
  const user = await getUser();
  const { orderId } = await params;
  if (!user) {
    return NextResponse.json(
      { message: "Пользователь не найден" },
      { status: 401 } // Unauthorized
    );
  }
  try {
    if (!orderId) {
      return NextResponse.json(
        { message: "ID заказа не указан" },
        { status: 400 } // Bad Request
      );
    }

    const findOrder = await Order.findById(orderId);
    if (!findOrder) {
      return NextResponse.json(
        { message: "Заказ не найден" },
        { status: 404 } // Not Found
      );
    }

    await findOrder.deleteOne();
    return NextResponse.json(
      { message: "Заказ успешно удалён", orderId: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "На сервере произошла ошибка попробуйте позже",
      },
      { status: 500 }
    );
  }
}
