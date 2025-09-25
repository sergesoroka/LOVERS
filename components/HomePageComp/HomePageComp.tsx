import Link from "next/link";
import Header from "../Header";
import MainLogo from "../Logo/MainLogo";
import MainLogoMobile from "../Logo/MainLogoMobile";
import MediaLinks from "../MediaLinks";
import ScrollComp from "./ScrollComp";

export default function HomePageComp({ videos }) {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNum = getRandomNumber(0, videos.length);

  return (
    <div className="cursorImg relative">
      <Link
        href={`/works/${videos[randomNum]?.slug}`}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        {" "}
      </Link>
      <div className="home-page">
        <div className="vimeo-background">
          <ScrollComp />
          <iframe
            className="video-bg"
            src={`${videos[randomNum]?.vimeo?.value}?badge=0&autopause=0&player_id=0&app_id=58479?autoplay=1&loop=1&muted=1&background=1`}
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
        <div className="relative pt-[22px] px-[24px]">
          <Header />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center h-full">
          <div className="block md:hidden">
            <MainLogoMobile />
          </div>
          <div className="hidden md:block text-center">
            <MainLogo />
            <p className="mt-6 text-[#1400ff] text-[24px] uppercase tracking-[11px] ml-8">
              From passion to action
            </p>
          </div>
          {/* <div className="flex justify-center items-center gap-1">
          <p className="uppercase text-[#1400ff]">watch showreel</p>
          <PlayIcon />
        </div> */}
        </div>
        <div className="absolute bottom-[22px] right-[24px] text-[#1400ff] text-right">
          <MediaLinks />
        </div>
        <div className="absolute bottom-[22px] left-[24px] fontPrime text-[36px] leading-9 text-[#fff] text-left">
          <div>{videos[randomNum]?.title?.rendered.toUpperCase()} /</div>
          <div>{videos[randomNum]?.subtitle?.rendered.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}
