import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export function tengeToStripeAmount(total) {
  const value = Number(total);
  if (!Number.isFinite(value) || value <= 0) return null;
  return Math.round(value * 100);
}

export async function markOrderPaid(order, paymentIntentId) {
  order.paymentStatus = "paid";
  order.paymentMethod = "apple_pay";
  order.stripePaymentIntentId = paymentIntentId;
  await order.save();
}
