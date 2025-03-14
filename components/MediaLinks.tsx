import pages from "./../data/pages.json";

export default async function MediaLinks() {
  // const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  // const pages = await data.json();

  return (
    <ul>
      {pages.map((page) => {
        if (page.id === 155) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white z-50"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })}
      {pages.map((page) => {
        if (page.id === 157) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })}
      {pages.map((page) => {
        if (page.id === 159) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })}
    </ul>
  );
}
