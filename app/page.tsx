import Link from "next/link";
import MainLogo from "@/components/Logo/MainLogo";
import PlayIcon from "@/components/Icons/PlayIcon";
import Header from "@/components/Header";
import MediaLinks from "@/components/MediaLinks";

export default async function Home() {
  // const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos");
  // const videos = await data.json();

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
        {/* <ul className="text-right uppercase text-[#1400ff]">
          <li>
            <Link
              href="https://vimeo.com/loverscompany"
              rel="noopener noreferrer"
              target="_blank"
            >
              vimeo
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/production.lovers.company/?igsh=MWxmbjFuNWttdm1vZw%3D%3D"
              rel="noopener noreferrer"
              target="_blank"
            >
              instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/loverscompany"
              rel="noopener noreferrer"
              target="_blank"
            >
              linked in
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
