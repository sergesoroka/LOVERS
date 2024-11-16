import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import CategoryVideo from "@/components/CategoryVideo/CategoryVideo";

export default async function WorksMusic() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos", {
    next: { revalidate: 10 },
  });
  const video = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black relative">
      <Header />
      <div className="absolute top-30 md:top-[90px]  text-[160px] z-50">
        <CategoryMenu />
      </div>
      <CategoryVideo video={video} type={"music"} />
      <ContactComp mode="light" />
    </div>
  );
}
