import Link from "next/link";
// import pages from "./../data/pages.json";

export default async function MediaLinks() {
  // const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  // const pages = await data.json();
  // https://vimeo.com/loverscompany

  return (
    <ul>
      <Link href="https://vimeo.com/loverscompany" target="_blank">
        <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
          vimeo
        </li>
      </Link>
      <Link
        href="https://www.instagram.com/production.lovers.company/?igsh=MWxmbjFuNWttdm1vZw%3D%3D#"
        target="_blank"
      >
        <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
          instagram
        </li>
      </Link>
      <Link
        href="https://www.linkedin.com/company/loverscompany"
        target="_blank"
      >
        <li className="uppercase hover:line-through cursor-pointer hover:text-white z-50">
          linkedin
        </li>
      </Link>
      {/* {pages.map((page) => {
        if (page.id === 155) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white z-50"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })} */}
      {/* {pages.map((page) => {
        if (page.id === 157) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })} */}
      {/* {pages.map((page) => {
        if (page.id === 159) {
          return (
            <li
              key={page.id}
              className="uppercase hover:line-through cursor-pointer hover:text-white"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })} */}
    </ul>
  );
}
