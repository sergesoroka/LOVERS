"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "../Icons/CloseIcon";
import { useState } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export default function VideoSlider({ videos }) {
  const pathname = usePathname();
  const page = Number(pathname.substring(7));

  //   const [page, setPage] = useState(pageID);

  return (
    <div className="flex justify-between items-center">
      {page == 0 ? (
        <p />
      ) : (
        <Link href={`/works/${page - 1}`}>
          <ArrowLeft />
        </Link>
      )}
      <div className="flex justify-center gap-4 mt-6">
        <iframe
          title="vimeo-player"
          src={`${videos[page].youtube.rendered}`}
          width="980"
          height="600"
        />

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
