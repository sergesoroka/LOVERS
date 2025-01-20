import React from "react";
import Header from "@/components/Header";
import VideoSliderCategory from "@/components/VideoSlider/VideoSliderCategory";

export default async function Video() {
  const data = await fetch(
    `http://restapi.lovers.company/wp-json/wp/v2/video?per_page=50`
  );
  const videos = await data.json();

  const getSlugs = () => videos.map((video) => video.slug);

  const slugsArray = getSlugs();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-screen">
      <Header />
      <VideoSliderCategory videos={videos} slugs={slugsArray} category="" />
    </div>
  );
}
