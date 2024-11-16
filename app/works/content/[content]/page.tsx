import React from "react";
import Header from "@/components/Header";
import VideoSlider from "@/components/VideoSlider/VideoSlider";

export default async function Video() {
  const data = await fetch(`http://lovers.company/api/wp-json/wp/v2/videos`);
  const videos = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-full">
      <Header />
      <VideoSlider videos={videos} />
    </div>
  );
}
