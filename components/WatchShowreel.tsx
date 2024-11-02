import PlayOutlineIcon from "./Icons/PlayOutlineIcon";

export default async function WatchShowreel() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div>
      {pages.map((page) => {
        if (page.id === 44) {
          return (
            <div
              key={page.id}
              className="flex items-center justify-start gap-3"
            >
              <div
                className="uppercase"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
              <PlayOutlineIcon />
            </div>
          );
        }
      })}
    </div>
  );
}
