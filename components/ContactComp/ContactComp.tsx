import "./contact.css";

import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";

import page from "./../../data/contacts-page.json";
import ContactRecord from "./ContactRecord";
import GeneralQnquiries from "../GeneralQnquiries";
import Slogan from "./Slogan";

export default async function ContactComp({ mode }: { mode: string }) {
  const data = await fetch("https://lovers-payload-cms.vercel.app/api/people");
  const dataGeneral = await fetch(
    "https://lovers-payload-cms.vercel.app/api/contacts/3"
  );
  const pageData = await data.json();

  const pageDataGeneral = await dataGeneral.json();

  return (
    <div className="relative md:ml-0">
      <div className="contacts">
        <div
          key={page.id}
          className="md:px-[69px] md:px-[12px]  text-[22px] leading-[24px]"
        >
          <Slogan mode={mode} />
          <div className="md:flex justify-between items-start">
            <div className="w-[84%] flex flex-col gap-5 mt-8 md:mt-[-60px] mb-[60px]">
              {pageData.docs.map((contact, index) => (
                <ContactRecord key={index} contact={contact} />
              ))}
            </div>

            <div className="w-[84%] flex flex-col gap-5 mt-8 md:mt-[-60px] mb-[60px]">
              <GeneralQnquiries data={pageDataGeneral} />
              <WatchShowreel />
              <MediaLinks />
              <DownloadPresentation mode="small" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mode === "light" ? "text-[#1400ff]" : "text-[#000000]"
        } flex justify-between items-end uppercase pb-2 text-[12px] md:mx-8`}
      >
        <p>© lovers production 2024</p>
        <p>design by antuos 2024</p>
      </div>
    </div>
  );
}
