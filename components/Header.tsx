"use client";
import "./components.css";
import LogoMenu from "./Icons/LogoMenu";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { id: "0", link: "works" },
  { id: "1", link: "about" },
  { id: "2", link: "clients" },
  { id: "3", link: "locations" },
  { id: "4", link: "casting" },
  { id: "5", link: "contacts" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useGSAP(() => {
    gsap.to("#slogan", { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
      {open ? (
        <div className="fixed pt-[42px] px-[38px] overflow-scroll md:overflow-hidden top-0 bottom-0 right-0 left-0 bg-[#1400ff] z-[999]">
          <div className="md:flex justify-between items-start">
            <div className="logo hidden md:block">
              <Link href={"/"}>
                <LogoMenu />
              </Link>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="uppercase text-white cursor-pointer select-none"
            >
              close
            </button>
          </div>
          <div className="md:flex b-8 justify-between items-end mt-[60px] ml-[43px]">
            <ul className="md:flex flex-wrap gap-12 mobMenu uppercase">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="menuItems text-white text-[90px] md:text-[180px] md:mb-[30px]"
                >
                  <Link href={`/${item.link}`}>{item.link}</Link>
                </li>
              ))}
            </ul>
            <div className=" text-black md:text-right text-[28px]">
              <SocialMedia />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          {pathname === "/" ? null : (
            <Link href="/">
              <div className="flex items-center justify-between">
                <div className="hidden md:flex items-center justify-between">
                  <Logo />
                </div>

                <div
                  id="slogan"
                  className={`hidden md:block md:opacity-0 uppercase ml-[11px] text-[18px] ${
                    pathname == "/" ? "text-[#1400ff]" : "text-white"
                  } `}
                >
                  From passion to action
                </div>
              </div>
            </Link>
          )}
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
          <div className="flex items-center justify-between"></div>
        </Link>
      </div>
    </>
  );
}

const SocialMedia = () => {
  return (
    <ul>
      <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
        <Link href="https://vimeo.com/loverscompany" target="_blank">
          vimeo
        </Link>
      </li>
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
  );
};
