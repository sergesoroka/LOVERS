import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import DownloadIcon from "@/components/Icons/DownloadIcon";
// import LoversImageComp from "@/components/ContactComp/LoversImageComp";

export default async function Locions() {
  // const data = await fetch("http://restapi.lovers.company/wp-json/wp/v2/pages");
  // const pages = await data.json();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-black locations-page">
        <Header />
        <div className="mt-8 md:mt-20">
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px]  md:mt-[60px]  md:text-[160px] leading-[100px] md:leading-[140px]  pt-14">
            Locations
          </div>
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px] md:text-[160px] leading-[100px] md:leading-[140px]">
            Locations
          </div>
          <div className="text-[#1400ff] contactsTitle uppercase text-[98px] md:text-[160px] leading-[100px] md:leading-[140px]">
            Locations
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[5.6rem] mt-[-2rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            At Lovers, we take pride in finding the perfect locations for your
            shoots. Whether you’re working on a film, commercial, photoshoot, or
            event, we’ll help you find the right spot. Challenging briefs, tight
            deadlines, or early shoots are no problem for us – we always get it
            done.
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
            Locations
          </div>
          <div className="text-[#1400ff] md:mt-[8rem] contactsTitle uppercase text-[98px] md:text-[160px] md:leading-[140px] z-0">
            Our Library
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[7rem] mt-[-3.4rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            We’ve built an extensive library of unique locations – from cozy
            cottages to grand buildings, from modern offices to industrial
            spaces.
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[7rem] md:mt-[2rem] md:ml-[7rem] md:text-[40px] md:leading-[44px]  mb-[6rem] z-10">
            We have it all! We stay up to date on new locations and are always
            ready to offer fresh ideas for your project.
          </div>
          <div className="text-[#1400ff] md:mt-[12rem] contactsTitle uppercase text-[78px] underline underline-offset-4 decoration-[5px] cursor-pointer md:text-[160px] leading-[84px] md:leading-[140px] z-0">
            DOWNLOAD OUR PRESENTATION
          </div>
          <div className="flex items-center justify-start gap-8">
            <div className="text-[#1400ff] contactsTitle uppercase text-[78px] underline underline-offset-4 decoration-[5px] cursor-pointer md:text-[160px] leading-[84px] md:leading-[140px] z-0">
              TO SEE LOCATION EXAMPLES
            </div>
            <DownloadIcon mode="large" />
          </div>
          <div className="text-[#1400ff] mt-[6rem] md:mt-[12rem] contactsTitle uppercase text-[78px] md:text-[160px] leading-[84px] md:leading-[140px] z-0">
            FOR PROPERTY <br />
            OWNERS
          </div>
          <div className="relative uppercase text-[28px] leading-[34px] md:mr-[7rem] mt-[-2rem] md:ml-[7rem] md:text-[40px] md:leading-[44px] z-10">
            If you have an interesting property, whether it’s a home or a
            commercial space, we’d be happy to help make it part of the world of
            film and advertising. Register your location with us – it’s free and
            hassle-free. We’ll guide you through the process and help bring your
            property to the big screen.
          </div>
          <div className="relative uppercase text-[#1400ff] text-[20px] leading-[26px] md:mr-[7rem] mt-[2rem] md:ml-[7rem] md:leading-[44px] md:mb-[300px] z-10">
            CONTACT US: production@lovers.company
          </div>
        </div>
        <ContactComp mode="light" />
      </div>
    </div>
  );
}
