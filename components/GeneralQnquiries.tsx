import "./components.css";

export default async function GeneralQnquiries() {
  const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div className="relative">
      {pages.map((page) => {
        if (page.id === 30) {
          return (
            <div
              key={page.id}
              className="qnquiries uppercase text-[20px] leading-[24px]"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          );
        }
      })}
    </div>
  );
}
