import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getUser } from "../../../dai";
import Order from "../../../../../models/Order";
import { connectToDatabase } from "../../../mongodb";
import { rateLimit, clientIpFromHeaders } from "../../../rate-limit";
import {
  codesMatch,
  MAX_CODE_ATTEMPTS,
  normalizeCode,
} from "../../../verification-code";

export async function POST(request) {
  const user = await getUser();
  if (!user?._id) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const ip = clientIpFromHeaders(request.headers);
  const limited = rateLimit(`verify:${user._id}:${ip}`, {
    limit: 8,
    windowMs: 15 * 60 * 1000,
  });
  if (!limited.ok) {
    return NextResponse.json({ message: "too many requests" }, { status: 429 });
  }

  try {
    const { code, orderId } = await request.json();
    const id = orderId?.orderId || orderId;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }
    await connectToDatabase();
    const checkOrder = await Order.findById(id);
    if (!checkOrder || String(checkOrder.userId) !== String(user._id)) {
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }
    if (checkOrder.paymentStatus === "paid") {
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }
    if (
      !checkOrder.codeExpiresAt ||
      checkOrder.codeExpiresAt.getTime() < Date.now() ||
      checkOrder.codeAttempts >= MAX_CODE_ATTEMPTS
    ) {
      await checkOrder.deleteOne();
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }

    const normalized = normalizeCode(code);
    if (!codesMatch(normalized, checkOrder.codeHash)) {
      checkOrder.codeAttempts += 1;
      if (checkOrder.codeAttempts >= MAX_CODE_ATTEMPTS) {
        await checkOrder.deleteOne();
      } else {
        await checkOrder.save();
      }
      return NextResponse.json({ message: "No Verify" }, { status: 400 });
    }

    checkOrder.emailVerified = true;
    checkOrder.codeHash = undefined;
    checkOrder.codeExpiresAt = undefined;
    await checkOrder.save();
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
    console.error("Verify error:", error?.message || error);
    return NextResponse.json(
      { message: "На сервере произошла ошибка попробуйте позже" },
      { status: 500 }
    );
  }
}
