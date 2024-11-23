import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";

// import video from "../../data/video.json";
export default async function Works() {
  const data = await fetch(
    "http://restapi.lovers.company/wp-json/wp/v2/video?per_page=50",
    {
      next: { revalidate: 10 },
    }
  );
  const videos = await data.json();

  return <WorksPageComp videos={videos} category="" />;
}
