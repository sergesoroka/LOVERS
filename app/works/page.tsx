import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import VimeoPlayer from "@/components/VimeoPlayer/VimeoPlayer";

export default async function Works() {
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
      <div className="md:grid grid-cols-2 gap-12 mt-28">
        {videos.map((video, idx) => {
          return (
            <div key={video.id}>
              <VimeoPlayer
                link={`/works/${idx}`}
                url={video.youtube.rendered}
              />
              <p className="mt-10 uppercase">{video.title.rendered}</p>
            </div>
          );
        })}
      </div>
      <ContactComp mode="light" />
    </div>
  );
}
