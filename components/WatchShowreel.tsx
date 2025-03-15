import page from "./../data/page-39.json";

export default async function WatchShowreel() {
  // const data = await fetch(
  //   "http://restapi.lovers.company/wp-json/wp/v2/pages/39"
  // );
  // const page = await data.json();

  return (
    <div>
      <div key={page.id} className="">
        <div
          className="uppercase"
          dangerouslySetInnerHTML={{ __html: page?.content?.rendered }}
        />
        {/* <PlayOutlineIcon /> */}
      </div>
    </div>
  );
}
