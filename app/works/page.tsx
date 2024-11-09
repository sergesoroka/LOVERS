import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";
import Link from "next/link";

export default async function Works() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos", {
    cache: "force-cache",
  });
  const videos = await data.json();

  return (
    <div className="pt-[22px] px-[24px] bg-black">
      <Header />

      <div className="grid grid-cols-2 gap-[100px]">
        {videos.map((video, idx) => {
          return (
            <Link
              href={`/works/${idx}`}
              passHref
              key={video.id}
              className="z-10"
            >
              <div
                className={`w-[600px] ${
                  idx % 2 != 0
                    ? "h-[200px] mt-[100px]"
                    : "h-[350px]  mt-[125px]"
                } overflow-hidden z-0`}
              >
                <iframe
                  className="relative z-[-9999]"
                  title="vimeo-player"
                  src={`${video.youtube.rendered}?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0`}
                  width="600"
                  height="340"
                />
              </div>
              <p className="mt-10 uppercase">{video.title.rendered}</p>
            </Link>
          );
        })}
      </div>
      <ContactComp mode="light" />
    </div>
  );
}
