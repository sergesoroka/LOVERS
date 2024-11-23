"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "../Icons/CloseIcon";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export default function VideoSlider({ videos }) {
  const pathname = usePathname();
  const page = Number(pathname.substring(7));

  return (
    <div className="flex justify-between items-center">
      {page == 0 ? (
        <p />
      ) : (
        <Link href={`/works/${page - 1}`}>
          <ArrowLeft />
        </Link>
      )}
      <div className="flex justify-center gap-4 mt-16">
        <div className="">
          <iframe
            title="vimeo-player"
            src={`${videos[page]?.vimeo.rendered}?background=1&byline=0&title=0&byline=0&portrait=0&?color=1400FF`}
            width="980"
            height="600"
          />
        </div>

        <Link href="/works">
          <div className="mt-5">
            <CloseIcon />
          </div>
        </Link>
      </div>
      {videos.length == page + 1 ? (
        <p />
      ) : (
        <Link href={`/works/${page + 1}`}>
          <ArrowRight />
        </Link>
      )}
    </div>
  );
}
