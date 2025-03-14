import React from "react";
import Header from "@/components/Header";
import VideoSliderCategory from "@/components/VideoSlider/VideoSliderCategory";
import { mov } from "@/data/videos-new";

export default async function Video() {
  // const data = await fetch(
  //   `http://restapi.lovers.company/wp-json/wp/v2/video?per_page=50`
  // );
  // const videos = await data.json();

  const categoryVideo = () =>
    mov.filter((video) => video.type_of_work.rendered == "features");
  const renderedVideo = categoryVideo();

  const getSlugs = () => renderedVideo.map((video) => video.slug);

  const slugsArray = getSlugs();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-full">
      <Header />

      <VideoSliderCategory
        videos={renderedVideo}
        slugs={slugsArray}
        category="features"
      />
    </div>
  );
}
