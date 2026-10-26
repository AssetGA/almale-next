import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { locales } from "../lib/locales";

const LanguageSwitcher = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className={`inline-flex justify-center w-full px-2 sm:px-4 py-2 text-sm font-medium text-white bg-green rounded-md shadow-sm hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase`}
      >
        {lang}
      </button>

      {isOpen && (
        <div className="absolute end-0 z-10 mt-2 w-16 origin-top-right rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}${pathname.substring(3)}`}
                className="block w-full px-4 py-2 text-sm uppercase text-gray-700 hover:bg-green-light hover:text-white"
              >
                {code}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
