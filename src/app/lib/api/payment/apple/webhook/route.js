import { NextResponse } from "next/server";
import Order from "../../../../../../models/Order";
import { connectToDatabase } from "../../../../mongodb";
import { getStripe, markOrderPaid, tengeToStripeAmount } from "../../../../stripe";

export async function POST(request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (error) {
    console.error("Apple Pay webhook signature:", error?.message || error);
    return NextResponse.json({ error: "signature" }, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const intent = event.data.object;
    try {
      await connectToDatabase();
      const order = await Order.findById(intent.metadata?.orderId);
      const expected = order ? tengeToStripeAmount(order.total) : null;
      if (
        order &&
        order.paymentStatus !== "paid" &&
        intent.amount === expected &&
        intent.currency === "kzt" &&
        intent.metadata?.userId === String(order.userId)
      ) {
        await markOrderPaid(order, intent.id);
      }
    } catch (error) {
      console.error("Apple Pay webhook order:", error?.message || error);
      return NextResponse.json({ error: "order" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
