import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import ClientsComp from "@/components/ClientsComp/ClientsComp";

export default async function Home() {
  const data = await fetch(
    "https://lovers-payload-cms.vercel.app/api/contacts"
  );
  const lovers = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] bg-[#1400ff]">
        <div className="px-[24px]">
          <Header />
        </div>

        <div className="my-20  px-[24px]">
          <h2 className="pagesTitle text-[#151515] ml-11 contactsTitle uppercase text-[98px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]">
            About
          </h2>
          <div className="uppercase text-[32px] leading-[34px] mt-[-48px] md:text-[40px] md:leading-[44px]">
            <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[170px]">
              {lovers?.docs[0]?.contact}
            </div>
          </div>
        </div>
        <div className="bg-[#151515] pt-20 pb-10 h-full w-full">
          <ClientsComp />
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
