import Product from "../../models/Product";
import ProductTranslation from "../../models/ProductTranslate";
import ProductInfo from "../../models/ProductInfo";
import ProductInfoTranslation from "../../models/ProductInfoTranslation";
import { connectToDatabase } from "./mongodb";

export const COOKWARE_SET_PRICE = 395000;

export function isCookwareSet(product) {
  return Number(product?.price) === COOKWARE_SET_PRICE;
}

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

export async function getLocalizedProducts(lang) {
  await connectToDatabase();
  const [list, own, fallback] = await Promise.all([
    Product.find().lean(),
    ProductTranslation.find({ language: lang }).lean(),
    lang === "en"
      ? []
      : ProductTranslation.find({ language: "en" }).lean(),
  ]);
  const byProduct = new Map(
    fallback.map((item) => [String(item.product), item])
  );
  for (const item of own) byProduct.set(String(item.product), item);

  return plain(
    list.map((elem) => {
      const translation = byProduct.get(String(elem._id));
      return {
        ...elem,
        name: translation?.name,
        description: translation?.description,
        diameter: translation?.diameter,
        size: translation?.size,
        about: translation?.about,
        title: translation?.title,
        keywords: translation?.keywords,
        descriptionMeta: translation?.descriptionMeta,
      };
    })
  );
}

export async function getLocalizedProductInfo(lang) {
  await connectToDatabase();
  const [list, own, fallback] = await Promise.all([
    ProductInfo.find().lean(),
    ProductInfoTranslation.find({ lang }).lean(),
    lang === "en" ? [] : ProductInfoTranslation.find({ lang: "en" }).lean(),
  ]);
  const byId = new Map(
    fallback.map((item) => [String(item.productInfoId), item])
  );
  for (const item of own) byId.set(String(item.productInfoId), item);

  return plain(
    list.map((elem) => {
      const translation = byId.get(String(elem._id));
      return {
        ...elem,
        meta: translation?.meta,
      };
    })
  );
}
