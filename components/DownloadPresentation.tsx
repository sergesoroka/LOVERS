import DownloadIcon from "./Icons/DownloadIcon";
import pages from "./../data/pages.json";

export default async function DownloadPresentation({ mode }: { mode: string }) {
  // const data = await fetch(
  //   "https://restapi.lovers.company/wp-json/wp/v2/pages"
  // );
  // const pages = await data.json();

  // locations: https://drive.google.com/file/d/14rX9Ap6mLoj7eyB6K7LNjsf9Cd6x0VEA/view
  // production: https://drive.google.com/file/d/1A7jkWsIPfW5--tipyhZjxfNjzo2UgU4A/view

  return (
    <div className="relative">
      {pages.map((page) => {
        if (page.id === 166) {
          return (
            <div
              key={page.id}
              className="flex items-end justify-start gap-3 pb-8 cursor-pointer"
            >
              <div
                className="uppercase"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
              <DownloadIcon mode={mode} />
            </div>
          );
        }
      })}
    </div>
  );
}
