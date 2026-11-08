import { DELIVERY_RATES, MAX_ORDER_QUANTITY } from "./delivery-rates";

export function priceOrder({ product, quantity, delivery }) {
  const qty = Number(quantity);
  if (!Number.isInteger(qty) || qty < 1 || qty > MAX_ORDER_QUANTITY) return null;
  const unit = Number(product?.price);
  if (!Number.isFinite(unit) || unit <= 0) return null;

  const rate = DELIVERY_RATES[delivery];
  if (rate === undefined) return null;

  const deliveryPrice = delivery === "international" ? rate * qty : rate;
  return {
    quantity: qty,
    deliveryPrice,
    total: unit * qty + deliveryPrice,
    productId: String(product._id),
  };
}
