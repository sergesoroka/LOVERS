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
              WE ARE A PRODUCTION SERVICE &gt;LOVERS&gt; SPECIALIZING IN
              AUDIOVISUAL CONTENT CREATION. WITH TEAMS IN BULGARIA, SPAIN, AND
              THE NETHERLANDS, WE PARTNER WITH PRODUCTION COMPANIES, CREATIVE
              AGENCIES, FILMMAKERS, AND PHOTOGRAPHERS, COMBINING OUR EXPERTISE
              WITH PASSION AND CREATIVITY TO SUPPORT GLOBAL BRANDS. WE BELIEVE
              IN THE POWER OF COLLABORATION. OUR FOCUS IS ON INNOVATIVE
              SOLUTIONS AND METICULOUS ATTENTION TO DETAIL, ENSURING EVERY
              PROJECT ACHIEVES THE HIGHEST STANDARDS OF QUALITY AND TECHNICAL
              EXCELLENCE. AT &gt;LOVERS&gt;, WE VALUE HONESTY, TRANSPARENCY,
              RELIABILITY, AND CREATING A POSITIVE, ENJOYABLE PROCESS FOR
              EVERYONE INVOLVED.
            </div>
          </div>
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
