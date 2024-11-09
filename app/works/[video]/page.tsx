import React from "react";
import Header from "@/components/Header";
import CloseIcon from "@/components/Icons/CloseIcon";
import Link from "next/link";

export default async function Video({ searchParams }) {
  const params = searchParams;
  const data = await fetch(
    `http://lovers.company/api/wp-json/wp/v2/videos/${params.id}`
  );
  const video = await data.json();

  return (
    <div className="pt-[22px] px-[24px]">
      <Header />
      <div className="flex justify-center gap-4 mt-6">
        <iframe
          title="vimeo-player"
          src={`${video.youtube.rendered}`}
          width="980"
          height="600"
        />
        <Link href="/works">
          <div className="mt-5">
            <CloseIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
