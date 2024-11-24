import "./contact.css";
import GeneralQnquiries from "../GeneralQnquiries";
import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";

import ImageComp from "./ImageComp";

export default async function ContactComp({ mode }: { mode: string }) {
  const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  const pages = await data.json();
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-[26.6rem] w-[290px] h-[133px] left-64 ease-in-out delay-250 hover:translate-y-10 hover:translate-x-4">
        <ImageComp name="daniil" />
      </div>
      <div className="hidden md:block absolute w-[290px] h-[133px] top-[19.6rem] left-[37rem] ease-in-out delay-250 hover:-translate-y-10 hover:-translate-x-4">
        <ImageComp name="mari" />
      </div>
      <div className="contacts">
        {pages.map((page) => {
          if (page.id === 14) {
            return (
              <div
                key={page.id}
                className="md:px-[69px]  text-[22px] leading-[24px]"
              >
                <div
                  className={`${
                    mode == "light" ? "text-[#1400ff]" : "text-[#1f1b1b]"
                  } contactsTitle uppercase text-[100px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]  pt-14`}
                  dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                />
                <div
                  className="md:flex justify-start gap-[230px] uppercase my-14"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <hr />
                <div className="pt-[26px] md:pb-[37px] md:flex justify-start  items-end md:gap-[126px]">
                  <GeneralQnquiries />
                </div>
                <DownloadPresentation mode="small" />
                <div className="pt-[26px] pb-[37px] flex flex-col md:flex-row justify-start gap-8  md:items-end md:gap-[230px]">
                  <WatchShowreel />
                  <div className="leading-[32px] mt-8">
                    <MediaLinks />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
