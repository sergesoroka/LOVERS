import Header from "../Header";
// import CategoryMenu from "../CategoryMenu/CategoryMenu";
import ContactComp from "../ContactComp/ContactComp";
import VimeoPlayer from "../VimeoPlayer/VimeoPlayer";

export default function WorksPageComp({ videos, category }) {
  return (
    <div className="pt-[22px] px-[24px] bg-black relative">
      <Header />
      {/* <div className="absolute top-30 md:top-[90px] md:left-[69px] text-[160px] z-50">
        <CategoryMenu size="l" />
      </div>
      {!category && (
        <div className="hidden md:block  z-50">
          <CategoryMenu size="s" />
        </div>
      )} */}
      <div className="md:grid grid-cols-2 mb-60 place-items-center gap-[75px] mt-28 md:px-[40px]">
        {videos &&
          videos.map((video, idx) => {
            if (category && video.type_of_work.rendered == category) {
              return (
                <div
                  key={video.id}
                  className={`group  ${
                    (idx + 1) % 3 == 0
                      ? "md:col-span-2 md:w-[770px] w-full"
                      : "md:w-[579px] w-full"
                  } `}
                >
                  <VimeoPlayer
                    link={`/works/${category}/${video.slug}`}
                    url={video.vimeo.rendered}
                  />

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
            }
            if (!category) {
              return (
                <div
                  key={video.id}
                  className={`group  ${
                    (idx + 1) % 3 == 0
                      ? "md:col-span-2 md:w-[770px] w-full"
                      : "md:w-[579px] w-full"
                  } `}
                >
                  <VimeoPlayer
                    link={`/works/${category}/${video.slug}`}
                    url={video.vimeo.rendered}
                  />

                  <div className="flex justify-between mb-10 mt-2 uppercase">
                    <p className="group-hover:text-[#1400ff] w-[50%] text-left">
                      {video.title.rendered}
                    </p>
                    <p className="group-hover:text-[#1400ff] w-[50%] text-right">
                      {video.subtitle.rendered}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <ContactComp mode="light" />
    </div>
  );
}
