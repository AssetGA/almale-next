"use client";

import React, { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ lang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const sectionHref = (id) => (onHome ? `#${id}` : `/${lang}/#${id}`);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const showRef = useRef(true);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const next = y < lastScrollY.current || y < 8;
        if (next !== showRef.current) {
          showRef.current = next;
          setShow(next);
        }
        lastScrollY.current = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`fixed justify-center top-0 left-0 w-full z-50 bg-white transition-transform duration-500 ease-out ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto bg-gray-header text-black relative my-auto z-20 shadow-lg">
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
              <Link
                href={`/${lang}`}
                className="box flex-shrink-0 h-4 w-50 [perspective:600px]"
              >
                <Image
                  src={"/img/logo1.png"}
                  width={150}
                  height={60}
                  alt="Logo Almale"
                  className="logo-flip px-5 sm:px-0 h-[16px] xl:h-[20px] w-full"
                />
              </Link>
              {/* Меню по центру */}
              <div className="hidden md:block">
                <div className="ms-10 flex items-baseline space-x-2 lg:space-x-6 rtl:space-x-reverse">
                  <a
                    href={sectionHref("brand")}
                    className="rounded-md text-sm font-medium hover:underline"
                  >
                    {t.navbar.navbarbrand}
                  </a>
                  <Link
                    href={`/${lang}/product`}
                    className="rounded-md text-sm font-medium hover:underline"
                  >
                    {t.navbar.navbarproduct}
                  </Link>
                  <Link
                    href={`/${lang}/recipes`}
                    className="rounded-md bg-green px-3 py-1 text-sm font-medium text-white hover:bg-green-light"
                  >
                    {t.navbar.navbarrecipes}
                  </Link>
                  <Link
                    href={`/${lang}/gallery`}
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
                  <a
                    href={sectionHref("contact")}
                    className="rounded-md text-sm font-medium hover:underline"
                  >
                    {t.navbar.navbarcontacts}
                  </a>
                  <a
                    href="https://www.instagram.com/almale_com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md text-sm font-medium hover:underline"
                  >
                    {lang === "ar" ? "إنستغرام" : "Instagram"}
                  </a>
                </div>
              </div>
              {/* Переключение языка */}
              <div className="flex items-center space-x-2 text-green rtl:space-x-reverse">
                <div className="flex-shrink-0 sm:me-3 hover:bg-gray-light">
                  <Link href={`/${lang}/basket`}>
                    <Image
                      src={"/img/basket.png"}
                      width={8}
                      height={8}
                      alt="basket"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </Link>
                </div>

                <LanguageSwitcher lang={lang} />
              </div>
            </div>
          </div>
          <div
            className={`slide-open absolute z-50 bg-white pb-60 md:hidden ${
              isOpen ? "is-open" : ""
            }`}
          >
              <div className="flex flex-row">
                <div className="px-8 py-12 space-y-1 sm:px-3 font-bold text-2xl leading-loose">
                  <a
                    href={sectionHref("brand")}
                    className="block px-3 py-2 font-medium focus:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navbar.navbarbrand}
                  </a>
                  <Link
                    href={`/${lang}/product`}
                    className="block px-3 py-2 font-medium focus:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navbar.navbarproduct}
                  </Link>
                  <Link
                    href={`/${lang}/recipes`}
                    className="block px-3 py-2 font-medium text-green focus:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navbar.navbarrecipes}
                  </Link>
                  <Link
                    href={`/${lang}/gallery`}
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
                  <a
                    href={sectionHref("contact")}
                    className="block px-3 py-2 font-medium focus:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.navbar.navbarcontacts}
                  </a>
                  <a
                    href="https://www.instagram.com/almale_com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 font-medium focus:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {lang === "ar" ? "إنستغرام" : "Instagram"}
                  </a>
                </div>
                <div className="mt-8 px-8 m-4 py-10">
                  <button
                    className="p-3 bg-[url('/img/close.svg')] bg-cover"
                    onClick={() => setIsOpen(false)}
                  ></button>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
