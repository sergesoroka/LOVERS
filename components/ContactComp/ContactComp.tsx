import "./contact.css";
import GeneralQnquiries from "../GeneralQnquiries";
import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";

import page from "./../../data/contacts-page.json";

export default async function ContactComp({ mode }: { mode: string }) {
  // const data = await fetch(
  //   "http://restapi.lovers.company/wp-json/wp/v2/pages/14"
  // );
  // const pageData = await data.json();

  // const page = pageData ? pageData : pages;

  return (
    <div className="relative">
      {/* <div className="hidden md:block z-50 absolute top-[26.6rem] w-[290px] h-[133px] left-64 transition ease-in-out delay-150 hover:translate-y-12 hover:-translate-x-4">
        <ImageComp name="daniil" />
      </div>
      <div className="hidden md:block absolute w-[290px] h-[133px] top-[19.6rem] left-[43rem] transition ease-in-out delay-150 hover:-translate-y-12 hover:-translate-x-4">
        <ImageComp name="mari" />
      </div> */}
      <div className="contacts">
        {/* {pages.map((page) => {
          if (page.id === 14) { */}

        <div key={page.id} className="md:px-[69px]  text-[22px] leading-[24px]">
          <div
            className={`${
              mode == "light" ? "text-[#1400ff]" : "text-[#1f1b1b]"
            } contactsTitle uppercase text-[98px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]  pt-14`}
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          <div
            className="flex flex-col gap-6 md:flex-row  md:justify-start md:gap-[230px] uppercase my-14"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
          <hr />
          <div className="pt-[26px]  md:flex justify-start  items-end md:gap-[126px]">
            <GeneralQnquiries />
          </div>
          <div className="pb-[37px] flex flex-col md:flex-row justify-start gap-8  md:items-end md:gap-[230px]">
            <WatchShowreel />

            <div className="leading-[32px] mt-8">
              <MediaLinks />
            </div>
          </div>
          <DownloadPresentation mode="small" />
        </div>
        {/* }
        })} */}
      </div>
    </div>
  );
}
