import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

export default async function Home() {
  // const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  // const pages = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-[#1400ff]">
        <Header />
        <div className="mt-20">
          <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]">
            <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[200px] pt-20">
              WE ARE &gt;LOVERS&gt; — A CREATIVE PRODUCTION COMPANY AND A
              FLEXIBLE CREATIVE AGENCY SPECIALIZING IN VISUAL STORYTELLING,
              BRANDING, AND WEB DESIGN. With teams in Spain, Bulgaria, France,
              Germany, the Netherlands, and the UK, we partner with production
              companies, creative agencies, filmmakers, and brands, offering
              everything from audiovisual content and campaigns to brand
              identity, creative direction, and digital experiences. We believe
              in the power of collaboration, clarity, and adaptability. Our
              focus is on smart, cost-effective solutions and meticulous
              attention to detail, ensuring each project meets the highest
              standards of creative and technical excellence. At &gt;LOVERS&gt;,
              we value honesty, transparency, and reliability — and we build
              creative processes that are smooth, inspiring, and genuinely
              enjoyable for everyone involved.
            </div>
          </div>
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
