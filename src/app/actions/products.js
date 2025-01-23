"use server";

import fetch from "node-fetch";

export async function fetchProducts(lang) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`);
    url.searchParams.append("lang", lang); // Добавляем параметр lang
    const res = await fetch(url.href);
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/product`,
    //   {
    //     params: { lang: lang },
    //   }
    // ); // Замените на URL вашего API
    if (!res.ok) throw new Error("Ошибка при загрузке товаров");
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Возвращаем пустой массив, если произошла ошибка
  }
}
