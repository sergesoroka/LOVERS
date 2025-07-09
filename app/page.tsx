import HomePageComp from "@/components/HomePageComp/HomePageComp";

import { mov } from "./../data/videos-new.js";

export default async function Home() {
  return <HomePageComp videos={mov} />;
}
