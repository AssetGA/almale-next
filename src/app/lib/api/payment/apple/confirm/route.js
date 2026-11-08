import { NextResponse } from "next/server";
import Order from "../../../../../../models/Order";
import { getUser } from "../../../../dai";
import { connectToDatabase } from "../../../../mongodb";
import { getStripe, markOrderPaid, tengeToStripeAmount } from "../../../../stripe";

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const { orderId, paymentIntentId } = await request.json();
    const user = await getUser();
    if (!user?._id || !orderId || !paymentIntentId) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const order = await Order.findById(orderId);
    if (!order || String(order.userId) !== String(user._id) || !order.emailVerified) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    if (order.paymentStatus === "paid") {
      return NextResponse.json({ paid: true });
    }

    const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
    const expected = tengeToStripeAmount(order.total);
    const matchesOrder =
      intent.status === "succeeded" &&
      intent.amount === expected &&
      intent.currency === "kzt" &&
      intent.metadata?.orderId === String(order._id) &&
      intent.metadata?.userId === String(user._id);

    if (!matchesOrder) {
      return NextResponse.json({ error: "payment" }, { status: 400 });
    }

    await markOrderPaid(order, intent.id);
    return NextResponse.json({ paid: true });
  } catch (error) {
    console.error("Apple Pay confirm error:", error?.message || error);
    return NextResponse.json({ error: "payment" }, { status: 500 });
  }
}
