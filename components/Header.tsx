"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo/Logo";
import Link from "next/link";

const menuItems = [
  { id: "0", link: "lovers" },
  { id: "1", link: "works" },
  { id: "2", link: "clients" },
  { id: "3", link: "locations" },
  { id: "4", link: "casting" },
  { id: "5", link: "contacts" },
];
export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="flex  items-center">
          <Logo />

          <div
            className={`uppercase ml-[11px] text-[18px] ${
              pathname == "/" ? "text-[#1400ff]" : "text-white"
            } `}
          >
            From passion to action:
          </div>
        </div>
      </Link>
      <ul className="flex justify-end items-center gap-7 uppercase">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.link}`}>{item.link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}