import AboutPageComp from "@/components/AboutPageComp/AboutPageComp";
import ContactComp from "@/components/ContactComp/ContactComp";
import Header from "@/components/Header";

export default async function About() {
  const data = await fetch("https://lovers-payload-cms.vercel.app/api/about");
  const about = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] bg-[#1400ff]">
        <div className="px-[24px]">
          <Header />
        </div>

        <AboutPageComp about={about} />

        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
