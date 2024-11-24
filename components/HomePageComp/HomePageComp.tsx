import Header from "../Header";
import MainLogo from "../Logo/MainLogo";
import MainLogoMobile from "../Logo/MainLogoMobile";
import MediaLinks from "../MediaLinks";
import ScrollComp from "./ScrollComp";

export default function HomePageComp() {
  return (
    <div className="home-page">
      <ScrollComp />
      <div className="relative pt-[22px] px-[24px]">
        <Header />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center h-full">
        <div className="block md:hidden">
          <MainLogoMobile />
        </div>
        <div className="hidden md:block">
          <MainLogo />
        </div>
        {/* <div className="flex justify-center items-center gap-1">
          <p className="uppercase text-[#1400ff]">watch showreel</p>
          <PlayIcon />
        </div> */}
      </div>
      <div className="absolute bottom-[22px] right-[24px] text-[#1400ff] text-right">
        <MediaLinks />
      </div>
    </div>
  );
}
