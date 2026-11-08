import { NextResponse } from "next/server";
import Order from "../../../../../models/Order";
import { getUser } from "../../../dai";
import { connectToDatabase } from "../../../mongodb";
import { getStripe, tengeToStripeAmount } from "../../../stripe";

async function loadPayableOrder(orderId, user) {
  if (!orderId || !user?._id) return { error: "unauthorized", status: 401 };
  await connectToDatabase();
  const order = await Order.findById(orderId);
  if (!order || String(order.userId) !== String(user._id)) {
    return { error: "unauthorized", status: 401 };
  }
  if (!order.emailVerified) return { error: "unverified", status: 403 };
  if (order.paymentStatus === "paid") return { error: "already_paid", status: 409 };
  const amount = tengeToStripeAmount(order.total);
  if (!amount) return { error: "amount", status: 400 };
  return { order, amount };
}

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe || !process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const { orderId, action } = await request.json();
    const user = await getUser();
    const loaded = await loadPayableOrder(orderId, user);
    if (loaded.error) {
      return NextResponse.json({ error: loaded.error }, { status: loaded.status });
    }

    const country = process.env.STRIPE_ACCOUNT_COUNTRY || "KZ";
    if (action === "quote") {
      return NextResponse.json({
        amount: loaded.amount,
        currency: "kzt",
        country,
      });
    }

    const intent = await stripe.paymentIntents.create(
      {
        amount: loaded.amount,
        currency: "kzt",
        automatic_payment_methods: { enabled: true },
        metadata: {
          orderId: String(loaded.order._id),
          userId: String(user._id),
        },
      },
      { idempotencyKey: `apple-pay-${loaded.order._id}` }
    );

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (error) {
    console.error("Apple Pay intent error:", error?.message || error);
    return NextResponse.json({ error: "payment" }, { status: 500 });
  }
}
