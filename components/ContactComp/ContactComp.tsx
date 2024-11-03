import "./contact.css";
import GeneralQnquiries from "../GeneralQnquiries";
import MediaLinks from "../MediaLinks";
import DownloadPresentation from "../DownloadPresentation";
import WatchShowreel from "../WatchShowreel";
// #1400ff
export default async function ContactComp({ mode }: { mode: string }) {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();
  return (
    <div>
      <div className="contacts">
        {pages.map((page) => {
          if (page.id === 28) {
            return (
              <div
                key={page.id}
                className="px-[69px]  text-[22px] leading-[24px]"
              >
                <div
                  className={`${
                    mode == "light" ? "text-[#1400ff]" : "text-[#1f1b1b]"
                  } contactsTitle uppercase mt-[60px]  text-[160px] leading-[140px]  pt-14`}
                  dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                />
                <div
                  className="flex justify-start gap-[223px] uppercase  my-14"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <hr />
                <div className="pt-[26px] pb-[37px] flex justify-start  items-end gap-[150px]">
                  <GeneralQnquiries />
                  <div className="leading-[32px]">
                    <MediaLinks />
                  </div>
                </div>
                <div className="pt-[26px] pb-[37px] flex justify-start  items-end gap-[188px]">
                  <DownloadPresentation />
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
