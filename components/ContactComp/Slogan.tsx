"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Slogan({ mode }) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#contactTitle",
      start: "top 60%",
      onEnter: () => gsap.to("#contactTitle", { autoAlpha: 1, duration: 0.6 }),
      onLeave: () => gsap.to("#contactTitle", { autoAlpha: 0, duration: 0.6 }),
      onEnterBack: () =>
        gsap.to("#contactTitle", { autoAlpha: 1, duration: 0.6 }),
      onLeaveBack: () =>
        gsap.to("#contactTitle", { autoAlpha: 0, duration: 0.6 }),
    });
  }, []);

  return (
    <div
      id="contactTitle"
      className={`${
        mode == "light" ? "text-[#1400ff]" : "text-[#1f1b1b]"
      } contactsTitle uppercase text-[98px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]  pt-14`}
    >
      Let’s make love, stills, and motion together.
    </div>
  );
}

export default Slogan;
