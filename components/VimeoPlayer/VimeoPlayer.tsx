"use client";
import Link from "next/link";
import { useRef } from "react";

const VimeoPlayer = ({ url, link }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"play"}', "*");
    }
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', "*");
    }
  };

  return (
    <div
      className="video-wrapper"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      style={{ width: "640px", height: "360px", overflow: "hidden" }}
    >
      <iframe
        ref={iframeRef}
        src={`${url}?background=1&byline=0&portrait=0&controls=0&muted=1`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link
        href={link}
        rel="noopener noreferrer"
        className="overlay-link"
      ></Link>
    </div>
  );
};

export default VimeoPlayer;
