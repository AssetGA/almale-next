import Link from "next/link";
import { getDictionary } from "../[lang]/dictionaries";

const Production = async ({ lang }) => {
  const t = await getDictionary(lang);

  return (
    <div id="production" className="w-full scroll-mt-24 text-lg font-bold">
      <div className="flex flex-col items-center p-10 xl:mx-40 lg:mx-20 md:mx-10">
        <h1
          className="text-center py-10 text-2xl"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.product.head}
        </h1>
        <div className="relative w-full overflow-hidden rounded-lg">
          <picture className="pointer-events-none absolute inset-0">
            <source
              media="(min-width: 640px)"
              srcSet="/img/production-desc.webp"
            />
            <img
              src="/img/production.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover rtl:-scale-x-100"
            />
          </picture>
          <div className="relative p-8 pb-72 sm:pb-8">
            <p
              className="sm:ms-4 sm:pb-24 md:pb-40 lg:pb-56 xl:pb-60 py-2"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              {t.product.one}
              <br />
              <span> {t.product.two}</span>
            </p>

            <Link
              href={`/${lang}/product`}
              className="sm:m-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green-light"
            >
              {t.product.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
