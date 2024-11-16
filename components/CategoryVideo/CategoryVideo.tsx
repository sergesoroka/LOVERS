import Link from "next/link";

export default function CategoryVideo({ video, type }) {
  return (
    <div className="md:grid grid-cols-2 gap-[100px] min-h-[1000px]">
      {video.map((video, idx) => {
        if (video.type_of_work?.rendered === type) {
          return (
            <Link
              href={`/works/${idx}`}
              passHref
              key={video.id}
              className="z-10"
            >
              <div className={`embed-container`}>
                <iframe
                  className="relative z-[-9999]"
                  title="vimeo-player"
                  src={`${video.youtube.rendered}?autoplay=1&background=1&byline=0&portrait=0`}
                  width="600"
                  height="340"
                />
              </div>
              <p className="mt-10 uppercase">{video.title.rendered}</p>
            </Link>
          );
        }
      })}
    </div>
  );
}
