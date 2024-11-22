import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";
export default async function WorksContent() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos", {
    next: { revalidate: 10 },
  });
  const videos = await data.json();

  return <WorksPageComp videos={videos} category="content" />;
}
