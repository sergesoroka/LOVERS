"use client";
import gsap from "gsap";
import { useEffect } from "react";

function AboutPageComp({ lovers }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        gsap.to("#pageAboutTitle", { autoAlpha: 0, duration: 0.3 });
      } else {
        gsap.to("#pageAboutTitle", { autoAlpha: 1, duration: 0.3 });
      }
    });
  }, []);

  return (
    <div className="my-20  px-[24px]">
      <h2
        id="pageAboutTitle"
        className="fixed top-95 pagesTitle text-[#151515] ml-11 contactsTitle uppercase text-[98px] leading-[84px]  md:text-[160px] md:leading-[140px]"
      >
        About
      </h2>
      <div className="uppercase relative text-[32px] leading-[34px] pt-[80px] md:text-[40px] md:leading-[44px]">
        <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[170px]">
          {lovers?.docs[0]?.contact}
        </div>
      </div>
    </div>
  );
}

export default AboutPageComp;
