import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";
import video from "../../../data/video.json";

export default async function WorksFilms() {
  // const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos", {
  //   next: { revalidate: 10 },
  // });
  // const videos = await data.json();

  return <WorksPageComp videos={video} category="films" />;
}
