import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Order from "../../../../models/Order";
import Product from "../../../../models/Product";
import { getUser } from "../../dai";
import { connectToDatabase } from "../../mongodb";
import { priceOrder } from "../../order-pricing";
import { rateLimit, clientIpFromHeaders } from "../../rate-limit";
import { createVerificationCode } from "../../verification-code";
import { sendVerificationMail } from "../../../utils/sendVerificationMail";

function clip(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  const user = await getUser();
  if (!user?._id) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const ip = clientIpFromHeaders(request.headers);
  const limited = rateLimit(`order:${user._id}:${ip}`, {
    limit: 10,
    windowMs: 15 * 60 * 1000,
  });
  if (!limited.ok) {
    return NextResponse.json({ message: "too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const name = clip(body.name, 100);
    const email = clip(body.email, 200);
    const mobile = clip(body.mobile, 30);
    const street = clip(body.street, 100);
    const city = clip(body.city, 200);
    const postalCode = clip(body.postalCode, 20);
    const productId = clip(body.productId, 50);

    if (name.length < 3 || !email.includes("@") || mobile.length < 6) {
      return NextResponse.json({ message: "invalid" }, { status: 400 });
    }
    if (!mongoose.isValidObjectId(productId)) {
      return NextResponse.json({ message: "invalid" }, { status: 400 });
    }

    await connectToDatabase();
    const product = await Product.findById(productId).lean();
    const priced = priceOrder({
      product,
      quantity: body.quantity,
      delivery: body.delivery,
    });
    if (!priced) {
      return NextResponse.json({ message: "invalid" }, { status: 400 });
    }

    const verification = createVerificationCode();
    const newOrder = await Order.create({
      name,
      email,
      mobile,
      street,
      city,
      postalCode,
      productId: priced.productId,
      deliveryPrice: priced.deliveryPrice,
      quantity: priced.quantity,
      total: priced.total,
      userId: String(user._id),
      codeHash: verification.hash,
      codeExpiresAt: verification.expiresAt,
      codeAttempts: 0,
    });

    sendVerificationMail(user, verification.code).catch(console.error);
    return NextResponse.json({ orderId: newOrder._id }, { status: 200 });
  } catch (error) {
    console.error("Order create error:", error?.message || error);
    return NextResponse.json(
      { message: "На сервере произошла ошибка попробуйте позже" },
      { status: 500 }
    );
  }
}
