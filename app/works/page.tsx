import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";
import { mov } from "./../../data/videos-new.js";

// import video from "../../data/video.json";
export default async function Works() {
  const data = await fetch("https://lovers-payload-cms.vercel.app/api/works", {
    next: { revalidate: 10 },
  });
  const videos = await data.json();

  return <WorksPageComp videos={videos} category="" />;
}
