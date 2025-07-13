"use client";
import "./components.css";
import LogoMenu from "./Icons/LogoMenu";

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
        <div className="fixed overflow-scroll top-0 bottom-0 right-0 left-0 bg-[#1400ff] z-[999]">
          <div className="md:flex justify-between pt-[22px] px-[24px] items-start">
            <div className="hidden md:block">
              <LogoMenu />
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[28px] right-[38px] uppercase text-white cursor-pointer select-none"
            >
              close
            </button>
          </div>
          <ul className="md:flex flex-wrap gap-10 mobMenu uppercase mb-8 px-[18px] mt-[50px] ml-[43px]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="text-white text-[90px] md:text-[180px] md:mb-[60px] tracking-tight"
              >
                <Link href={`/${item.link}`}>{item.link}</Link>
              </li>
            ))}
          </ul>
          <div className="md:absolute ml-16 mb-8 bottom-[22px] right-[24px] text-black md:text-right text-[28px]">
            <ul>
              <Link href="https://vimeo.com/loverscompany" target="_blank">
                <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
                  vimeo
                </li>
              </Link>
              <Link
                href="https://www.instagram.com/production.lovers.company/?igsh=MWxmbjFuNWttdm1vZw%3D%3D#"
                target="_blank"
              >
                <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
                  instagram
                </li>
              </Link>
              <Link
                href="https://www.linkedin.com/company/loverscompany"
                target="_blank"
              >
                <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
                  linkedin
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
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
          <div
            className="absolute top-[28px] right-[38px] uppercase text-red-50 cursor-pointer select-none"
            onClick={() => setOpen(true)}
          >
            menu
          </div>
        </div>
      )}
      <div className="fixed right-[24px] left-[24px] z-50 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center justify-between">
            {/* <div className="hidden md:flex items-center justify-between">
              <Logo />
            </div>

            <div
              className={`hidden md:block uppercase ml-[11px] text-[18px] ${
                pathname == "/" ? "text-[#1400ff]" : "text-white"
              } `}
            >
              From passion to action
            </div> */}
          </div>
        </Link>

        {/* <ul className="hidden md:flex justify-end items-center gap-7 uppercase">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:line-through ${
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
        </ul> */}
      </div>
    </>
  );
}
