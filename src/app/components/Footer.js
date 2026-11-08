import Image from "next/image";
import React from "react";
import { categoryNav } from "../lib/categories";
import { STORE } from "../lib/store";

const Footer = ({ t, lang }) => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="w-full bg-green text-white text-sm">
        <div className="grid grid-cols-2 px-5 sm:px-20 lg:px-40 py-16">
          <div className="flex flex-col">
            <div className="w-[190px] h-[30px] m-1">
              <Image
                src={"/img/logo-white.png"}
                width={100}
                height={100}
                alt="Logo Alma le"
                className="px-5 sm:px-0 w-full h-auto object-cover"
              />
            </div>
            <p className="max-w-40 sm:w-72">{t.footer.head}</p>
            <p className="mt-3 max-w-40 sm:w-72">{STORE.name}</p>
            <p className="max-w-40 sm:w-72">{STORE.locality}</p>
            <a className="max-w-40 sm:w-72" href={`tel:${STORE.phoneTel}`}>
              {STORE.phoneDisplay}
            </a>
          </div>
          <div className="w-full">
            <div className="flex flex-col items-end pt-6 rtl:items-start">
              <a
                href="https://www.instagram.com/almale_com/"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Instagram
              </a>
              <a
                href="/"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Facebook
              </a>
              <a
                href={`/${lang}/gift`}
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                {t.footer.gift}
              </a>
              <a
                href={`/${lang}/recipes`}
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                {t.footer.cooking}
              </a>
              <a
                href={`/${lang}/set`}
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                {t.footer.set}
              </a>
              {categoryNav(lang).map((item) => (
                <a
                  key={item.slug}
                  href={`/${lang}/cookware/${item.slug}`}
                  className="hover:bg-white hover:text-green-light py-2 sm:py-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.youtube.com/@alma_le"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Youtube
              </a>
              <a
                href="/"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
