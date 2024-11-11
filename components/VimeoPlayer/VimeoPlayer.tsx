"use client";
import React, { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const VimeoPlayer = () => {
  const playerRef = useRef(null);
  const videoId = "953558075";

  // useEffect(() => {
  //   if (playerRef.current) {
  //     const player = new Player(playerRef.current);

  //     // Optionally, add event listeners
  //     player.on("play", () => {
  //       console.log("Video is playing");
  //     });

  //     return () => {
  //       player.destroy(); // Cleanup on unmount
  //     };
  //   }
  // }, []);

  return (
    <div id="vimeo-container">
      vimeo
      <iframe
        ref={playerRef}
        id="vimeo-player"
        src={`https://player.vimeo.com/video/954064547?h=6db3f35cae?autoplay=0&background=1&byline=0&portrait=0`}
        width="640"
        height="360"
        // allow="autoplay; fullscreen; picture-in-picture"
        // allowFullScreen
      />
    </div>
  );
};

export default VimeoPlayer;
