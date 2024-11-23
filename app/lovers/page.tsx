import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import LoversImageComp from "@/components/ContactComp/LoversImageComp";

export default async function Home() {
  const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  const pages = await data.json();

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-[26.6rem] left-64">
        <LoversImageComp number="1" w="232" h="115" />
      </div>
      <div className="hidden md:block absolute top-[55.6rem] right-16">
        <LoversImageComp number="2" w="211" h="168" />
      </div>
      <div className="hidden md:block absolute top-[65.6rem] left-16">
        <LoversImageComp number="3" w="211" h="168" />
      </div>
      <div className="pt-[22px] px-[24px] bg-[#1400ff]">
        <Header />
        <div className="mt-20">
          <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]">
            {pages.map((page) => {
              if (page.id === 41) {
                return (
                  <div
                    key={page.id}
                    className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[195px] pt-20"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                );
              }
            })}
          </div>
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
