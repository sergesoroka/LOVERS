import AboutPageComp from "@/components/AboutPageComp/AboutPageComp";
import ContactComp from "@/components/ContactComp/ContactComp";
import Header from "@/components/Header";

export default async function About() {
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

        <AboutPageComp lovers={lovers} />

        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
