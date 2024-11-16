import Link from "next/link";

const VimeoPlayer = ({ url, link }) => {
  return (
    <div className="video-wrapper">
      <iframe
        src={`${url}?autoplay=1&background=1&byline=0&portrait=0`}
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
