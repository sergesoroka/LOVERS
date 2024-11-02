import DownloadIcon from "./Icons/DownloadIcon";

export default async function DownloadPresentation() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div>
      {pages.map((page) => {
        if (page.id === 42) {
          return (
            <div
              key={page.id}
              className="flex items-center justify-start gap-3"
            >
              <div
                className="uppercase"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
              <DownloadIcon />
            </div>
          );
        }
      })}
    </div>
  );
}
