"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { createStore } from "./store/store";
import { loadProductList } from "./store/productSlice";
import { loadProductInfoList } from "./store/productInfoSlice";
import { loadVideoList } from "./store/videoSlice";

export default function StoreProvider({ children, lang }) {
  const storeRef = useRef();
  const loadedRef = useRef({ catalog: "", video: "" });
  const pathname = usePathname();

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  useEffect(() => {
    let cancelled = false;

    const loadCatalog = () => {
      if (cancelled || loadedRef.current.catalog === lang) return;
      loadedRef.current.catalog = lang;
      storeRef.current.dispatch(loadProductList({ lang }));
      storeRef.current.dispatch(loadProductInfoList({ lang }));
    };

    const loadVideo = () => {
      if (cancelled || loadedRef.current.video === lang) return;
      loadedRef.current.video = lang;
      storeRef.current.dispatch(loadVideoList({ lang }));
    };

    const path = pathname || "";
    const needsCatalog = /\/(product|basket)(\/|$)/.test(path);
    const needsVideo = /\/gallery(\/|$)/.test(path);

    if (needsCatalog) loadCatalog();
    if (needsVideo) loadVideo();

    let idleId;
    let timerId;
    const schedule = () => {
      const run = () => {
        if (!needsCatalog) loadCatalog();
        if (!needsVideo) loadVideo();
      };
      if (window.requestIdleCallback) {
        idleId = window.requestIdleCallback(run, { timeout: 3000 });
      } else {
        timerId = window.setTimeout(run, 2000);
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [lang, pathname]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
