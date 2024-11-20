"use client";
import { usePathname } from "next/navigation";
import CloseIcon from "../Icons/CloseIcon";
import Link from "next/link";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export default function VideoSliderCategory({ videos, slugs, category }) {
  const pathname = usePathname();

  const slug =
    category == ""
      ? pathname.replace(/^([^/]*\/){2}/, "")
      : pathname.replace(/^([^/]*\/){3}/, "");

  const index = slugs.indexOf(slug);

  console.log(index);

  console.log(slugs[index]);

  return (
    <div>
      <div className="flex justify-between items-center">
        {index == 0 ? (
          <p />
        ) : (
          <Link href={`/works/${category}/${slugs[index - 1]}`}>
            <ArrowLeft />
          </Link>
        )}
        <div className="flex justify-center gap-4 mt-16">
          <div className="">
            <iframe
              title="vimeo-player"
              src={`${videos[index]?.youtube.rendered}?background=1&byline=0&title=0&byline=0&portrait=0&?color=1400FF`}
              width="980"
              height="600"
            />
          </div>

          <Link href={`/works/${category}`}>
            <div className="mt-5">
              <CloseIcon />
            </div>
          </Link>
        </div>
        {videos.length == index + 1 ? (
          <p />
        ) : (
          <Link href={`/works/${category}/${slugs[index + 1]}`}>
            <ArrowRight />
          </Link>
        )}
      </div>
      <div className="flex justify-between mb-10 mt-2 px-16 uppercase">
        <p className=" w-[50%] text-left">{videos[index].title.rendered}</p>
        <p className=" w-[380px] text-right">
          {videos[index].subtitle.rendered}
        </p>
      </div>
    </div>
  );
}
