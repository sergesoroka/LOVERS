import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import Link from "next/link";
import DownloadIcon from "@/components/Icons/DownloadIcon";
// import LoversImageComp from "@/components/ContactComp/LoversImageComp";

export default async function Casting() {
  //   const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  //   const pages = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-[#212121] casting-page">
        <Header />
        <div className="mt-8 md:mt-20">
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px]  md:mt-[60px]  md:text-[160px] leading-[100px] md:leading-[140px]  pt-14">
            Casting
          </div>
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px] md:text-[160px] leading-[100px] md:leading-[140px]">
            Casting
          </div>
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px] md:text-[160px] leading-[100px] md:leading-[140px]">
            Casting
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[5.6rem] mt-[-2rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            Talent scouting is our passion. Need casting for a film, commercial,
            photoshoot, or event? We’ll find the right actors, models, and
            talents that perfectly fit creative concept.
            {/* {pages.map((page) => {
              if (page.id === 41) {
                return (
                  <div
                    key={page.id}
                    className="uppercase text-[32px] leading-[34px] md:text-[40px] md:leading-[44px]  md:px-[200px] pt-20"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                );
              }
            })} */}
          </div>
          <div className="text-[#1400ff] md:mt-[-2rem] contactsTitle uppercase text-[98px] md:text-[160px] md:leading-[140px] z-0">
            Casting
          </div>
          <div className="text-[#1400ff] md:mt-[8rem] contactsTitle uppercase text-[98px] md:text-[160px] md:leading-[140px] z-0">
            OUR TALENT <br /> DATABASE
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[7rem] mt-[-3.4rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            We work with a large pool of actors, models, and professionals from
            various countries, ready for any task – from film projects to
            advertising campaigns and photoshoots. We have talents of all ages
            and types. Every day, we discover new faces.
          </div>
          <Link
            href="https://drive.google.com/file/d/1A7jkWsIPfW5--tipyhZjxfNjzo2UgU4A/view"
            target="_blank"
          >
            <div className="text-[#1400ff] md:mt-[12rem] contactsTitle uppercase text-[78px] underline underline-offset-4 decoration-[5px] cursor-pointer md:text-[160px] leading-[84px] md:leading-[140px] z-0">
              DOWNLOAD OUR PRESENTATION
            </div>
            <div className="">
              <div className=" text-[#1400ff] contactsTitle uppercase text-[78px] underline underline-offset-4 decoration-[5px] cursor-pointer md:text-[160px] leading-[84px] md:leading-[140px] z-0">
                <p>TO LEARN MORE ABOUT OUR</p>
              </div>
              <div className="flex items-center gap-4 text-[#1400ff] contactsTitle uppercase text-[78px] underline underline-offset-4 decoration-[5px] cursor-pointer md:text-[160px] leading-[84px] md:leading-[140px] z-0">
                <p>TALENTS</p>
                <DownloadIcon mode="large" />
              </div>
            </div>
          </Link>
          <div className="text-[#1400ff] mt-[6rem] md:mt-[12rem] contactsTitle uppercase text-[78px] md:text-[160px] leading-[84px] md:leading-[140px] z-0">
            FOR TALENTS
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[7rem] mt-[-2rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            If you’re an actor, model, or talented professional looking to
            participate in our projects, we’d love to have you in our database.
            Registration is free. Join our team and get a chance to be part of
            amazing projects!
          </div>
          <div className="relative uppercase text-[#1400ff] text-[22px] leading-[26px] md:mr-[7rem] mt-[2rem] md:ml-[7rem] md:leading-[44px] md:mb-[300px] z-10">
            CONTACT US:{" "}
            <a
              className="cursor-pointer"
              href="mailto:production@lovers.company"
            >
              production@lovers.company
            </a>
          </div>
        </div>
        <ContactComp mode="light" />
      </div>
    </div>
  );
}
