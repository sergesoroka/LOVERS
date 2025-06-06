import WorksPageComp from "@/components/WorksPageComp/WorksPageComp";

export default async function Works() {
  const data = await fetch(
    "https://lovers-payload-cms.vercel.app/api/works?limit=60",
    {
      next: { revalidate: 10 },
    }
  );
  const videos = await data.json();

  return <WorksPageComp videos={videos} category="" />;
}
