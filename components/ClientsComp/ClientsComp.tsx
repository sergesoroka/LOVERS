"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

function ClientsComp({ resources }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        gsap.to("#pageClientTitle", { autoAlpha: 0, duration: 0.3 });
      } else {
        gsap.to("#pageClientTitle", { autoAlpha: 1, duration: 0.3 });
      }
    });
  }, []);

  return (
    <div>
      <h2
        id="pageClientTitle"
        className="pagesTitle fixed top-45  text-[#1400ff] ml-11 contactsTitle uppercase text-[98px] leading-[84px]  md:text-[160px] md:leading-[140px]"
      >
        Clients
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 relative items-center justify-center pt-6 px-8">
        {resources.map((img) => {
          return (
            <Image
              key={img.asset_id}
              className="mx-auto"
              src={img.secure_url}
              width={160}
              height={160}
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
}

export default ClientsComp;
