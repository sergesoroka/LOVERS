import React from "react";
import Header from "@/components/Header";
import VideoSlider from "@/components/VideoSlider/VideoSlider";
import VideoSliderCategory from "@/components/VideoSlider/VideoSliderCategory";

export default async function Video() {
  const data = await fetch(`http://lovers.company/api/wp-json/wp/v2/videos`);
  const videos = await data.json();

  const getSlugs = () => videos.map((video) => video.slug);

  const slugsArray = getSlugs();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-full">
      <Header />
      {/* <VideoSlider videos={videos} /> */}
      <VideoSliderCategory videos={videos} slugs={slugsArray} category="" />
    </div>
  );
}
