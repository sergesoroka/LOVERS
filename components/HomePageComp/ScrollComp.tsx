"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function ScrollComp() {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition == 22) router.push("/works");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <></>;
}
