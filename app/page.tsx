import HomePageComp from "@/components/HomePageComp/HomePageComp";

import { mov } from "./../data/videos-new.js";

export default async function Home() {
  // const data = await fetch(
  //   "http://restapi.lovers.company/wp-json/wp/v2/video?per_page=50",
  //   {
  //     next: { revalidate: 10 },
  //   }
  // );
  // const videos = await data.json();
  return <HomePageComp videos={mov} />;
}
