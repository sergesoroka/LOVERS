import DownloadIcon from "./Icons/DownloadIcon";

export default async function DownloadPresentation({ mode }: { mode: string }) {
  const data = await fetch(
    "https://restapi.lovers.company/wp-json/wp/v2/pages"
  );
  const pages = await data.json();

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
