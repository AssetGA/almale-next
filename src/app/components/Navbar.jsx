"use client";

import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ lang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="xl:container xl:mx-auto">
      <nav className="w-full bg-gray-header text-black mx-auto relative my-auto z-20">
        <div className="px-3 xl:px-10 mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="-mr-2 flex md:hidden relative ">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* Логотип */}
            <button className="flex-shrink-0 w-50 h-4">
              <a href={`/${lang}`}>
                <Image
                  src={"/img/logo1.png"}
                  width={150}
                  height={60}
                  alt="Logo Almale"
                  className="px-5 sm:px-0  h-[16px] xl:h-[20px] w-full"
                />
              </a>
            </button>
            {/* Меню по центру */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-6">
                <Link
                  href={`/${lang}/#brand`}
                  className="rounded-md text-sm font-medium hover:underline"
                >
                  {t.navbar.navbarbrand}
                </Link>
                <Link
                  href={`/${lang}/#production`}
                  className="rounded-md text-sm font-medium hover:underline"
                >
                  {t.navbar.navbarproduct}
                </Link>
                <Link
                  href={`/${lang}/#adventages`}
                  className="rounded-md text-sm font-medium hover:underline"
                >
                  {t.navbar.navbaradventages}
                </Link>
                {/* <a
                  href={`/${lang}/#opinion`}
                  className="rounded-md text-sm font-medium hover:underline"
                >
                  {t.navbar.navbaropinions}
                </a> */}
                <Link
                  href={`/${lang}/#contact`}
                  className="rounded-md text-sm font-medium hover:underline"
                >
                  {t.navbar.navbarcontacts}
                </Link>
              </div>
            </div>
            {/* Переключение языка */}
            <div className="flex items-center space-x-2 text-green">
              <div className="flex-shrink-0 sm:mr-3 hover:bg-gray-light">
                <Link href={`/${lang}/basket`}>
                  <Image
                    src={"/img/basket.png"}
                    width={8}
                    height={8}
                    alt="basket"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    priority
                  />
                </Link>
              </div>

              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute pb-60 md:hidden bg-white z-50">
            <div className="flex flex-row">
              <div className="px-8 py-12 space-y-1 sm:px-3 font-bold text-2xl leading-loose">
                <Link
                  href={`/${lang}/#brand`}
                  className="block px-3 py-2 font-medium focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar.navbarbrand}
                </Link>
                <Link
                  href={`/${lang}/#production`}
                  className="block px-3 py-2 font-medium focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar.navbarproduct}
                </Link>
                <Link
                  href={`/${lang}/#adventages`}
                  className="block px-3 py-2 font-medium focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar.navbaradventages}
                </Link>
                {/* <a
                  href={`/${lang}/#opinion`}
                  className="block px-3 py-2 font-medium focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar.navbaropinions}
                </a> */}
                <Link
                  href={`/${lang}/#contact`}
                  className="block px-3 py-2 font-medium focus:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {t.navbar.navbarcontacts}
                </Link>
              </div>
              <div className="mt-8 px-8 m-4 py-10">
                <button
                  className="p-3 bg-[url('/img/close.svg')] bg-cover"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
