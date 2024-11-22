"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./category.css";

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

  return (
    <ul
      className={`${
        size == "l" ? "categoryList" : "categoryListSmall"
      }  text-[90px] `}
    >
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`${
            pathname === "/works/" + item.link && "text-white"
          } text-[#1400ff] ${
            size == "s" && "leading-[26px]"
          } leading-[90px] uppercase`}
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
