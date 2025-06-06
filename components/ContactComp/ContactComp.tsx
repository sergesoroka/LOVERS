import "./contact.css";

import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";

import page from "./../../data/contacts-page.json";
import ContactRecord from "./ContactRecord";

export default async function ContactComp({ mode }: { mode: string }) {
  const data = await fetch("https://lovers-payload-cms.vercel.app/api/people");
  const pageData = await data.json();

  return (
    <div className="relative">
      <div className="contacts">
        <div key={page.id} className="md:px-[69px]  text-[22px] leading-[24px]">
          <div
            className={`${
              mode == "light" ? "text-[#1400ff]" : "text-[#1f1b1b]"
            } contactsTitle uppercase text-[98px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]  pt-14`}
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          <div className="w-[84%] grid grid-cols-1 md:grid-cols-2 gap-8  mt-8 md:mt-[-60px] mb-[60px]">
            {pageData.docs.map((contact, index) => (
              <ContactRecord key={index} contact={contact} />
            ))}
          </div>
          <hr />
          <div className="pb-[37px] flex flex-col md:flex-row justify-start gap-8  md:items-end md:gap-[230px]">
            <WatchShowreel />
            <div className="leading-[32px] mt-8">
              <MediaLinks />
            </div>
          </div>
          <DownloadPresentation mode="small" />
        </div>
      </div>
    </div>
  );
}
