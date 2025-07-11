"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Tooltip from "./Tooltip";
import { usePathname } from "next/navigation";
import { useAppSelector } from "../store/hooks";
import { haracter } from "../utils/api";

const ProductAbout = ({ lang, t }) => {
  const products = useAppSelector((state) => state.product.entity);
  const productsInfo = useAppSelector((state) => state.productInfo.entity);
  const loading = useAppSelector((state) => state.product.isLoading);
  const isLoadingProductInfo = useAppSelector(
    (state) => state.productInfo.dataLoaded
  );
  const [selectImage, setSelectImage] = useState({ src: "" });
  const [list] = useState(["0", "1", "2", "3"]);
  const params = usePathname();
  // Проверяем, если продукты загружены
  if (loading) {
    return <p>{t.utensil.one}</p>;
  }

  if (!isLoadingProductInfo) {
    return <p>{t.utensil.one}</p>;
  }

  if (!products || products.length === 0) {
    return <p>{t.utensil.two}</p>;
  }

  const product = products.find((elem) => {
    return elem._id.toString() === params.split("/").pop();
  });

  const filterProducts = products.filter((elem) => {
    return elem.price !== 395000;
  });

  const listSrc = productsInfo.find((elem) => {
    return elem.productId === product._id;
  });

  const handleSelect = (srcSel) => {
    if (selectImage !== "") {
      setSelectImage(srcSel);
    } else {
      setSelectImage(srcSel);
    }
  };
  return (
    <div className="flex flex-col px-5">
      <div className="relative flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-20">
        {/* Левая часть: основное изображение и миниатюры */}
        <div className="md:w-1/2 flex flex-col items-center">
          <h2
            className="text-2xl font-semibold mb-2 sm:hidden"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {product?.name}
          </h2>
          {/* Описание товара */}
          <p className="mb-6 sm:hidden">{product?.description}</p>
          {/* Основное изображение товара */}
          <div className="w*full">
            <div
              className="mb-4 hover:shadow-lg"
              onMouseEnter={() => handleSelect({ src: "" })}
            >
              <Image
                className="w-full object-cover rounded-lg"
                src={
                  selectImage.src === "" ? product?.imageUrl : selectImage.src
                }
                width={320}
                height={300}
                alt={product !== undefined ? product?.title : "Almale cookware"}
                priority
              />
            </div>
            {/* Миниатюры изображений */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {list !== undefined &&
                list.map((elem, index) => (
                  <div
                    key={elem}
                    className="aspect-w-1 aspect-h-1"
                    onMouseEnter={() =>
                      handleSelect({ src: listSrc.src[index] })
                    }
                  >
                    <Image
                      className=" rounded-lg cursor-pointer border border-gray-200 hover:border-gray"
                      src={listSrc.src[index]}
                      width={200}
                      height={200}
                      alt={listSrc ? listSrc.meta[index] : "Alma cookeware"}
                      unoptimized // ✅ Позволяет Google индексировать
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Правая часть: описание товара */}
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
          <div className="py-5">
            {/* Название товара */}
            <h1
              className="text-xl font-semibold mb-2 hidden sm:block"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              {product?.name}
            </h1>
            {/* Описание товара */}
            <p className="mb-6 hidden sm:block">{product?.description}</p>

            <div className="hidden sm:grid grid-cols-6 gap-1 pb-10">
              {haracter.map((elem) => (
                <Tooltip key={elem.id} text={elem.name}>
                  <Image
                    src={elem.imageUrl}
                    width={100}
                    height={100}
                    alt={elem.name}
                    unoptimized // ✅ Позволяет Google индексировать
                  />
                </Tooltip>
              ))}
            </div>
            {/* Цена товара */}
            <div className="flex flex-row justify-between">
              <Link href={`/${lang}/product`} className="right-0">
                <div className="bg-green hover:bg-green-light active:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600 transition transform duration-150">
                  {t.productAbout.buttonBack}
                </div>
              </Link>
              <Link href={`/${lang}/basket`} className="right-0">
                <div className="bg-green hover:bg-green-light active:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600 transition transform duration-150">
                  {t.productAbout.buttonBuy}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col items-start mb-20 px-5">
          <p className="text-lg py-2" style={{ fontFamily: "Montserrat-Bold" }}>
            {t.productAbout.p}
          </p>

          <div className="max-w-[800px] text-sm">
            <p className="text-bold" style={{ fontFamily: "Montserrat-Bold" }}>
              {t.productAbout.size}
            </p>
            <p className="px-5">{product.size}</p>
            <div className="my-3">
              <p style={{ fontFamily: "Montserrat-Bold" }}>
                {t.productAbout.case}
              </p>
              <ul className="px-5">
                {t.productAbout.caseType.map((elem) => (
                  <li key={elem.id}>{"- " + elem.material}</li>
                ))}
              </ul>
            </div>

            <p style={{ fontFamily: "Montserrat-Bold" }}>
              {t.productAbout.innersurface}
            </p>
            <p className="px-5">{t.productAbout.surface}</p>
            <p className="py-2">{product.about}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 max-w-4xl mx-auto mb-20">
          {filterProducts.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} lang={lang} t={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
