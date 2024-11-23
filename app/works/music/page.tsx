import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";

export default async function WorksMusic() {
  const data = await fetch(
    "http://restapi.lovers.company/wp-json/wp/v2/video?per_page=50",
    {
      next: { revalidate: 10 },
    }
  );
  const videos = await data.json();

  return <WorksPageComp videos={videos} category="music" />;
}
