import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import CategoryVideo from "@/components/CategoryVideo/CategoryVideo";

export default async function WorksFilms() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos", {
    next: { revalidate: 10 },
  });
  const videos = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black relative">
      <Header />
      <div className="absolute top-30 md:top-[90px]  text-[160px] z-50">
        <CategoryMenu />
      </div>
      <CategoryVideo video={videos} type={"films"} />
      <ContactComp mode="light" />
    </div>
  );
}
