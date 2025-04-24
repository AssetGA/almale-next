"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../store/hooks";
import { useState } from "react";
import GlowingButton from "./common/GlowingButton";

const UtensilsSet = ({ lang, t }) => {
  const products = useAppSelector((state) => state.product.entity);
  const productsInfo = useAppSelector((state) => state.productInfo.entity);
  const isLoading = useAppSelector((state) => state.product.dataLoaded);
  const isLoadingProductInfo = useAppSelector(
    (state) => state.productInfo.dataLoaded
  );
  const [selectImage, setSelectImage] = useState({ src: "" });
  const [listSrc] = useState(["0", "1", "2", "3"]);
  // Проверяем, если продукты загружены
  if (!isLoading) {
    return <p>{t.utensil.one}</p>;
  }

  if (!isLoadingProductInfo) {
    return <p>{t.utensil.one}</p>;
  }

  if (!products || products.length === 0) {
    return <p>{t.utensil.two}</p>;
  }

  const utensilProduct = products.find((elem) => {
    return elem.price === 395000;
  });

  const newProducts = products.filter((elem) => {
    return elem.price !== 395000;
  });

  const handleSelect = (srcSel) => {
    if (selectImage !== "") {
      setSelectImage(srcSel);
    } else {
      setSelectImage(srcSel);
    }
  };

  const productInfo = productsInfo.find((elem) => {
    return elem.productId === utensilProduct._id;
  });

  return (
    <>
      {isLoading && (
        <div className="flex flex-col px-5">
          <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-10 sm:my-20">
            {/* Левая часть: основное изображение и миниатюры */}
            <div className="md:w-1/2 flex flex-col items-center">
              <h1
                className="text-2xl font-semibold mb-2 sm:hidden px-5"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {utensilProduct?.name}
              </h1>
              {/* Описание товара */}
              <p className="mb-6 sm:hidden px-5">
                {utensilProduct.description}
              </p>
              {/* Основное изображение товара */}
              <div className="w-full">
                <div
                  className="mb-4 hover:shadow-lg"
                  onMouseEnter={() => handleSelect({ src: "" })}
                >
                  <Image
                    className="w-full h-auto object-cover rounded-lg"
                    src={
                      selectImage.src === ""
                        ? utensilProduct?.imageUrl
                        : selectImage.src
                    }
                    width={320}
                    height={300}
                    alt={
                      utensilProduct
                        ? utensilProduct?.name
                        : "almale kitchenware"
                    }
                    priority
                  />
                </div>
                {/* Миниатюры изображений */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {listSrc.map((elem, index) => (
                    <div key={elem} className="w-26 w-26">
                      <button
                        className="w-ful h-full"
                        onMouseEnter={() =>
                          handleSelect({ src: productInfo?.src[index] })
                        }
                      >
                        <Image
                          className={`object-contain rounded-lg cursor-pointer border hover:shadow-lg hover:`}
                          src={productInfo?.src[index]}
                          width={300}
                          height={300}
                          alt={productInfo?.meta[index]}
                          priority
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая часть: описание товара */}
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
              <div className="py-5">
                {/* Название товара */}
                <h2
                  className="text-xl font-semibold mb-2 hidden sm:block"
                  style={{ fontFamily: "Montserrat-Bold" }}
                >
                  {utensilProduct?.name}
                </h2>
                {/* Описание товара */}
                <p className="mb-6 hidden sm:block">
                  {utensilProduct?.description}
                </p>
                {/* Цена товара */}
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-semibold text-gray-600 mb-4">
                    {utensilProduct?.price}
                    <span className="px-2">
                      {lang !== "en" ? "тг" : "tg (KZ)"}
                    </span>
                  </p>
                  <Link href={`/${lang}/basket`} className="right-0">
                    <GlowingButton
                      text={t.utensil.buttonBuy}
                      elemClass="py-2 px-4 rounded-md"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto">
            <div className="flex flex-col items-start mb-20 px-5">
              <p
                className="text-bold py-2"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {t.utensil.p}
              </p>
              <p className="max-w-[800px]">{t.utensil.description}</p>
              {/* <Link
                href={`${
                  process.env.NEXT_PUBLIC_SITE_URL + "/" + lang
                }/recipes`}
                className="hover:text-green"
              >
                recipes
              </Link> */}
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:gap-10 max-w-4xl p-5 mb-20">
              {newProducts.map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} lang={lang} t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UtensilsSet;
