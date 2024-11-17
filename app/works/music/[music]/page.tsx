import React from "react";
import Header from "@/components/Header";
import VideoSliderCategory from "@/components/VideoSlider/VideoSliderCategory";

export default async function Video() {
  const data = await fetch(`http://lovers.company/api/wp-json/wp/v2/videos`);
  const videos = await data.json();

  const categoryVideo = () =>
    videos.filter((video) => video.type_of_work.rendered == "music");
  const renderedVideo = categoryVideo();

  const getSlugs = () => renderedVideo.map((video) => video.slug);

  const slugsArray = getSlugs();

  return (
    <div className="pt-[22px] px-[24px] bg-black h-full">
      <Header />

      <VideoSliderCategory
        videos={renderedVideo}
        slugs={slugsArray}
        category="music"
      />
    </div>
  );
}
