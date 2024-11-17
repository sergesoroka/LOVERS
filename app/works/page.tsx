import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import VimeoPlayer from "@/components/VimeoPlayer/VimeoPlayer";

export default async function Works() {
  const data = await fetch(
    "http://lovers.company/api/wp-json/wp/v2/videos?per_page=50",
    {
      next: { revalidate: 10 },
    }
  );
  const videos = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black relative">
      <Header />
      <div className="absolute top-30 md:top-[90px] md:left-[69px] text-[160px] z-50">
        <CategoryMenu />
      </div>
      <div className="md:grid grid-cols-2 gap-[75px] mt-28 md:px-[56px]">
        {videos.map((video, idx) => {
          return (
            <div key={video.id}>
              <VimeoPlayer
                link={`/works/${idx}`}
                url={video.youtube.rendered}
              />
              <div className="flex justify-between mb-10 mt-2 uppercase">
                <p className="">{video.title.rendered}</p>
                <p className="">{video.subtitle.rendered}</p>
              </div>
            </div>
          );
        })}
      </div>
      <ContactComp mode="light" />
    </div>
  );
}
