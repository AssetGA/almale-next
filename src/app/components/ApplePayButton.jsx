"use client";

import { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

async function postPayment(path, body) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  return { ok: response.ok, data };
}

export default function ApplePayButton({ orderId, t, onPaid }) {
  const mountRef = useRef(null);
  const [state, setState] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!orderId) return undefined;
    let active = true;
    const mount = mountRef.current;

    async function setup() {
      if (!publishableKey) {
        if (active) setState("not_configured");
        return;
      }

      const quote = await postPayment("/lib/api/payment/apple", {
        orderId,
        action: "quote",
      });
      if (!active) return;
      if (!quote.ok) {
        setState(quote.data.error === "not_configured" ? "not_configured" : "error");
        return;
      }

      const stripe = await loadStripe(publishableKey);
      if (!stripe) {
        if (active) setState("unavailable");
        return;
      }

      const paymentRequest = stripe.paymentRequest({
        country: quote.data.country || "KZ",
        currency: "kzt",
        total: { label: "Alma Le", amount: quote.data.amount },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      const canPay = await paymentRequest.canMakePayment();
      if (!active) return;
      if (!canPay?.applePay || !mount) {
        setState("unavailable");
        return;
      }

      paymentRequest.on("paymentmethod", async (event) => {
        const intent = await postPayment("/lib/api/payment/apple", {
          orderId,
          action: "intent",
        });
        if (!intent.ok || !intent.data.clientSecret) {
          event.complete("fail");
          setState("error");
          return;
        }

        const confirmed = await stripe.confirmCardPayment(
          intent.data.clientSecret,
          { payment_method: event.paymentMethod.id },
          { handleActions: false }
        );
        if (confirmed.error) {
          event.complete("fail");
          setMessage(confirmed.error.message || "");
          setState("error");
          return;
        }

        event.complete("success");
        let paymentIntent = confirmed.paymentIntent;
        if (paymentIntent?.status === "requires_action") {
          const actionResult = await stripe.confirmCardPayment(intent.data.clientSecret);
          if (actionResult.error) {
            setMessage(actionResult.error.message || "");
            setState("error");
            return;
          }
          paymentIntent = actionResult.paymentIntent;
        }
        const saved = await postPayment("/lib/api/payment/apple/confirm", {
          orderId,
          paymentIntentId: paymentIntent.id,
        });
        if (!saved.ok) {
          setState("error");
          return;
        }
        onPaid?.();
      });

      const button = stripe.elements().create("paymentRequestButton", {
        paymentRequest,
        style: {
          paymentRequestButton: {
            type: "buy",
            theme: "dark",
            height: "44px",
          },
        },
      });
      button.mount(mount);
      setState("ready");
    }

    setup().catch(() => {
      if (active) setState("error");
    });

    return () => {
      active = false;
    };
  }, [orderId]);

  return (
    <div className="my-4">
      <div ref={mountRef} className={state === "ready" ? "block" : "hidden"} />
      {state === "unavailable" && (
        <p className="text-sm text-gray-600">{t.basket.applePayUnavailable}</p>
      )}
      {state === "not_configured" && (
        <p className="text-sm text-gray-600">{t.basket.applePaySetup}</p>
      )}
      {state === "error" && (
        <p className="text-sm text-red-600">
          {message || t.basket.applePayError}
        </p>
      )}
    </div>
  );
}
