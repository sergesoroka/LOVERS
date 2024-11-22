import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import LoversImageComp from "@/components/ContactComp/LoversImageComp";

export default async function Home() {
  // const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  // const pages = await data.json();

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
          <div className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[195px] pt-20">
            We are -Lovers-, a full-service production company specializing in
            audiovisual content creation. We work with global brands, creative
            agencies, filmmakers, and photographers, combining our professional
            experience with passion and love. Our priority is an innovative
            approach and attention to detail to ensure that each project
            consistently meets the highest standards of quality and technical
            excellence. Our values are honesty, transparency, reliability, and
            maintaining a good mood. We provide full-service production in the
            Netherlands, Spain, Portugal, and Bulgaria, including directors &
            DoPs, location scouting & management, special permits, studios,
            multilingual casting services, celebrity negotiations,
            camera/lighting/grip equipment, special effects, accommodations,
            music licensing negotiations, and audio and visual post-production
            services. Our goal is to build lasting and strong relationships with
            our clients, founded on trust, openness, and positive emotions.
          </div>
          {/* {pages.map((page) => {
            if (page.id === 2) {
              return (
                <div
                  key={page.id}
                  className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[195px] pt-20"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
              );
            }
          })} */}
        </div>
        <ContactComp mode="dark" />
      </div>
    </div>
  );
}
