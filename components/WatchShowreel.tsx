export default async function WatchShowreel() {
  const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div>
      {pages.map((page) => {
        if (page.id === 39) {
          return (
            <div key={page.id} className="">
              <div
                className="uppercase"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
              {/* <PlayOutlineIcon /> */}
            </div>
          );
        }
      })}
    </div>
  );
}
