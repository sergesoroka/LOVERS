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
      <div className="md:grid grid-cols-2 place-items-center gap-[75px] mt-28 md:px-[56px]">
        {videos.map((video, idx) => {
          return (
            <div
              key={video.id}
              className={`group  ${
                (idx + 1) % 3 == 0
                  ? "md:col-span-2 md:w-[770px] w-full"
                  : "md:w-[579px] w-full"
              } `}
            >
              <div className="">
                <div className="">
                  <VimeoPlayer
                    link={`/works/${video.slug}`}
                    url={video.youtube.rendered}
                  />
                </div>
              </div>
              <div className="flex justify-between mb-10 mt-2 uppercase">
                <p className="group-hover:text-yellow-400 w-[50%] text-left">
                  {video.title.rendered}
                </p>
                <p className="group-hover:text-yellow-400 w-[50%] text-right">
                  {video.subtitle.rendered}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <ContactComp mode="light" />
    </div>
  );
}
