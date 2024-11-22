// import DownloadIcon from "./Icons/DownloadIcon";

export default async function DownloadPresentation({ mode }: { mode: string }) {
  // const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  // const pages = await data.json();

  return (
    <div>
      {/* {pages.map((page) => {
        if (page.id === 42) {
          if (mode === "small") {
            return (
              <div key={page.id} className="flex items-end justify-start gap-3">
                <div
                  className="uppercase"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <DownloadIcon mode="small" />
              </div>
            );
          }
          if (mode === "large") {
            return (
              <div key={page.id} className="relative">
                <div
                  className="contactsTitle leading-[146px] text-[152px] uppercase text-[#1400ff] underline underline-offset-8 decoration-4"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <div className="absolute right-16 bottom-16">
                  <DownloadIcon mode="large" />
                </div>
              </div>
            );
          }
        }
      })} */}
    </div>
  );
}
