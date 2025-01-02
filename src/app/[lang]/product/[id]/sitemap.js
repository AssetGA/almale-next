// import { fetchProducts } from "./page";

// const SUPPORTED_LANGS = ["en", "ru", "kz"];

// export async function generateSitemaps() {
//   const params = [];

//   await Promise.all(
//     SUPPORTED_LANGS.map(async (lang) => {
//       const products = await fetchProducts(lang);

//       if (products.length === 0) {
//         console.warn(`No products found for language: ${lang}`);
//         return;
//       }
//       const productSet = products.filter((elem) => {
//         return (
//           elem._id !== "675a1528abab837f85c2555c" ||
//           elem._id !== "674a3cf6deec0f0dd2b22010"
//         );
//       });

//       productSet.forEach((product) => {
//         params.push({ lang, id: product._id });
//       });
//     })
//   );

//   return params; // Return parameters for static generation
// }

// export default async function sitemap({ lang, id }) {
//   const products = await fetchProducts(lang);

//   console.log("product.date", products);
//   return products.map((product) => ({
//     url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/product/${id}`,
//     lastModified: product.date
//       ? new Date(product.date).toISOString()
//       : new Date().toISOString(),
//   }));
// }
