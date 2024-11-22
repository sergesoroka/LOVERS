import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";

import video from "../../data/video.json";
export default async function Works() {
  // const data = await fetch(
  //   "http://lovers.company/api/wp-json/wp/v2/videos?per_page=50",
  //   {
  //     next: { revalidate: 10 },
  //   }
  // );
  // const videos = await data.json();

  return <WorksPageComp videos={video} category="" />;
}
