export default async function MediaLinks() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div>
      {pages.map((page) => {
        if (page.id === 34) {
          return (
            <div
              key={page.id}
              className="uppercase"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })}
    </div>
  );
}
