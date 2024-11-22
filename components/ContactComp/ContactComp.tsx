import "./contact.css";
import GeneralQnquiries from "../GeneralQnquiries";
import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";

import ImageComp from "./ImageComp";

export default async function ContactComp({ mode }: { mode: string }) {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-[26.6rem] left-64">
        <ImageComp name="daniil" />
      </div>
      <div className="hidden md:block absolute top-[19.6rem] left-[34rem]">
        <ImageComp name="mari" />
      </div>
      <div className="contacts">
        {pages.map((page) => {
          if (page.id === 28) {
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
                  className="md:flex justify-start gap-[23px] uppercase my-14"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <hr />
                <div className="pt-[26px] md:pb-[37px] md:flex justify-start  items-end md:gap-[126px]">
                  <GeneralQnquiries />
                  <div className="leading-[32px] mt-8">
                    <MediaLinks />
                  </div>
                </div>
                <div className="pt-[26px] pb-[37px] flex flex-col md:flex-row justify-start gap-8  md:items-end md:gap-[130px]">
                  <DownloadPresentation mode="small" />
                  <WatchShowreel />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
