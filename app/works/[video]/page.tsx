import React from "react";
import Header from "@/components/Header";
import CloseIcon from "@/components/Icons/CloseIcon";
import Link from "next/link";
import VideoSlider from "@/components/VideoSlider/VideoSlider";

export default async function Video({ searchParams }) {
  const params = searchParams;
  const data = await fetch(`http://lovers.company/api/wp-json/wp/v2/videos`);
  const videos = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-full">
      <Header />
      <VideoSlider videos={videos} />
    </div>
  );
}
