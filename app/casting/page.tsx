import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

export default async function Casting() {
  //   const data = await fetch("http://lovers.company/api/wp-json/wp/v2/pages");
  //   const pages = await data.json();

  return (
    <div className="casting-bg">
      <div className="casting-bg-img h-[853px] pt-[22px] px-[24px] ">
        <Header />
        {/* {pages.map((page) => {
          if (page.id === 57) {
            return (
              <div key={page.id} className="px-[69px]">
                <h1 className="contactsTitle text-[#1400ff] uppercase mt-[60px]  text-[160px] leading-[80px]">
                  {page.title.rendered}
                </h1>
                <h1 className="contactsTitle text-[#1400ff] uppercase mt-[60px]  text-[160px] leading-[80px]">
                  {page.title.rendered}
                </h1>
                <h1 className="contactsTitle text-[#1400ff] uppercase mt-[60px]  text-[160px] leading-[80px]">
                  {page.title.rendered}
                </h1>

                <div
                  className="z-10 uppercase text-[40px] leading-[44px] mt-[-60px] pl-[125px] pr-[290px] pt-14"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
                <h1 className="contactsTitle z-0 text-[#1400ff] uppercase mt-[-10px]  text-[160px] leading-[80px]">
                  {page.title.rendered}
                </h1>
              </div>
            );
          }
        })} */}

        <ContactComp mode="light" />
      </div>
    </div>
  );
}
