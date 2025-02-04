import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
// import LoversImageComp from "@/components/ContactComp/LoversImageComp";

export default async function Clients() {
  const data = await fetch(
    "https://restapi.lovers.company/wp-json/wp/v2/client?per_page=50"
  );
  const pages = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-[#151515]">
        <Header />
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center pt-6">
            {pages.map((page) => {
              return (
                <div
                  key={page.id}
                  className="w-[160px] h-[160px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
              );
            })}
          </div>
        </div>
        <ContactComp mode="light" />
      </div>
    </div>
  );
}
