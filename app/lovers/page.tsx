import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

export default async function Home() {
  const data = await fetch(
    "https://lovers-payload-cms.vercel.app/api/contacts"
  );
  const lovers = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-[#1400ff]">
        <Header />
        <div className="mt-20">
          <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]">
            <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[200px] pt-20">
              {lovers?.docs[0]?.contact}
            </div>
          </div>
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
