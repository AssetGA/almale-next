import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
        <div className="absolute right-0 z-10 w-14 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-60">
          <div className="py-1">
            <Link
              href={`/kz${pathname.substring(3)}`}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              kz
            </Link>
            <Link
              href={`/ru${pathname.substring(3)}`}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              ru
            </Link>
            <Link
              href={`/en${pathname.substring(3)}`}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              en
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
