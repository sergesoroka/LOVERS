import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";
import { mov } from "./../../data/videos-new.js";

// import video from "../../data/video.json";
export default async function Works() {
  const data = await fetch(
    "https://lovers-payload-cms.vercel.app/api/works?limit=60",
    {
      next: { revalidate: 10 },
    }
  );
  const videos = await data.json();

  // const movData = mov.map((item) => {
  //   return (
  //     <div key={item.id} className="pb-8 pl-4">
  //       <p>CLIENT: {item.title.rendered}</p>
  //       <p>NAME: {item.subtitle.rendered}</p>

  //       <p>{item.vimeo.rendered}</p>
  //       <p>{item.type_of_work.rendered}</p>
  //     </div>
  //   );
  // });

  // return movData;

  return <WorksPageComp videos={videos} category="" />;
}
