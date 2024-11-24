"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./category.css";
import { useEffect, useState } from "react";

const menuItems = [
  { id: "0", link: "features", name: "features" },
  { id: "1", link: "commercials", name: "commercials" },
  { id: "2", link: "music", name: "music" },
  { id: "3", link: "content", name: "content" },
  { id: "4", link: "films", name: "films" },
  { id: "5", link: "all-works", name: "all works" },
];

export default function CategoryMenu({ size }: { size: string }) {
  const pathname = usePathname();
  const [isShown, setIsShown] = useState(true);
  const [smallIsShown, setSmallIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 40) setIsShown(false);
      if (scrollPosition < 40) setIsShown(true);

      if (scrollPosition > 570) setSmallIsShown(true);
      if (scrollPosition < 570) setSmallIsShown(false);

      if (scrollHeight - scrollPosition < 1200) setSmallIsShown(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShown, setIsShown, setSmallIsShown, setSmallIsShown]);

  if (size == "l" && isShown) {
    return (
      <ul className={`${"categoryList"}  text-[90px] `}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${
              pathname === "/works/" + item.link && "text-white"
            } text-[#1400ff]  ${"leading-[90px]"}  uppercase`}
          >
            <Link
              href={`${
                item.link === "all-works" ? "/works" : "/works/" + item.link
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  if (size == "s") {
    return (
      <ul
        className={`${
          smallIsShown
            ? "fixed top-[250px] left-[69px] right-0 z-50 transition duration-150 ease-in-out"
            : "hidden"
        } categoryListSmall text-[90px] w-fit`}
      >
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${
              pathname === "/works/" + item.link && "text-white"
            } text-[#1400ff]  ${
              size == "s"
                ? "leading-[26px] text-white hover:text-[#1400ff]"
                : "leading-[90px]"
            }  uppercase`}
          >
            <Link
              href={`${
                item.link === "all-works" ? "/works" : "/works/" + item.link
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
