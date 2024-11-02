import MainLogo from "@/components/Logo/MainLogo";
import PlayIcon from "@/components/Icons/PlayIcon";
import Header from "@/components/Header";
import MediaLinks from "@/components/MediaLinks";

export default async function Home() {
  return (
    <div className="home-page">
      <div className="absolute top-[22px] left-[24px] right-[24px]">
        <Header />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center h-full">
        <MainLogo />
        <div className="flex justify-center items-center gap-1">
          <p className="uppercase text-[#1400ff]">watch showreel</p>
          <PlayIcon />
        </div>
      </div>
      <div className="absolute bottom-[22px] right-[24px] text-[#1400ff] text-right">
        <MediaLinks />
      </div>
    </div>
  );
}
