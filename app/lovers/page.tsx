import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

export default async function Home() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div className="pt-[22px] px-[24px]">
      <Header />
      <div>
        {pages.map((page) => {
          if (page.id === 2) {
            return (
              <div
                key={page.id}
                className="uppercase text-[40px] leading-[44px] px-[195px] pt-14"
                dangerouslySetInnerHTML={{ __html: page.content.rendered }}
              />
            );
          }
        })}
      </div>
      <ContactComp />
    </div>
  );
}
