"use client";
import "./components.css";

import { usePathname } from "next/navigation";

import Logo from "./Logo/Logo";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { id: "0", link: "lovers" },
  { id: "1", link: "works" },
  { id: "2", link: "clients" },
  { id: "3", link: "locations" },
  { id: "4", link: "casting" },
  { id: "5", link: "contacts" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <div className="fixed md:hidden top-0 bottom-0 right-0 left-0 bg-[#1400ff] z-[999]">
          <div className="flex justify-between pt-[22px] px-[24px]">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="line-through uppercase text-black"
            >
              close menu
            </button>
          </div>
          <ul className="mobMenu uppercase mb-8 px-[18px]">
            {menuItems.map((item) => (
              <li key={item.id} className="text-black">
                <Link href={`/${item.link}`}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="md:hidden flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="uppercase" onClick={() => setOpen(true)}>
            menu
          </div>
        </div>
      )}

      <div className="fixed right-[24px] left-[24px] z-50 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center justify-between">
              <Logo />
            </div>

            <div
              className={`hidden md:block uppercase ml-[11px] text-[18px] ${
                pathname == "/" ? "text-[#1400ff]" : "text-white"
              } `}
            >
              From passion to action
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex justify-end items-center gap-7 uppercase">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:line-through ${
                pathname == "/" + item.link &&
                pathname !== "/works" &&
                pathname !== "/locations" &&
                pathname !== "/casting" &&
                pathname !== "/clients"
                  ? "text-black line-through"
                  : pathname == "/works" && item.link == "works"
                  ? "text-[#1400ff]  line-through"
                  : pathname == "/locations" && item.link == "locations"
                  ? "text-white  line-through"
                  : pathname == "/casting" && item.link == "casting"
                  ? "text-white  line-through"
                  : pathname == "/clients" && item.link == "clients"
                  ? "text-[#1400ff]  line-through"
                  : "text-white"
              } `}
            >
              <Link href={`/${item.link}`}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
