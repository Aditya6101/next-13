"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  let pathname = usePathname();
  let active = href === pathname;

  return (
    <Link
      className={`${
        active ? "border-b-2 border-cyan-400 text-cyan-400" : "text-white"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
