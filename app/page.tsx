import Logo from "@/components/Logo/Logo";

export default async function Home() {
  const data = await fetch("http://lovers.company/api/wp-json/wp/v2/videos");
  const videos = await data.json();

  return (
    <div className="px-4 py-2">
      <Logo />
      <ul className="text-sm space-y-6">
        ?{/* @ts-expect-error */}
        {videos.map((video) => (
          <div
            key={video.id}
            dangerouslySetInnerHTML={{ __html: video?.content?.rendered }}
          />
        ))}
      </ul>
    </div>
  );
}
