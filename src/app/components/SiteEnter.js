"use client";

import { usePathname } from "next/navigation";

export default function SiteEnter({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="site-descend">
      {children}
    </div>
  );
}
