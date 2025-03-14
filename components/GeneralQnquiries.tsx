import "./components.css";

import pages from "./../data/page-30.json";

export default async function GeneralQnquiries() {
  // const data = await fetch(
  //   "http://restapi.lovers.company/wp-json/wp/v2/pages/30"
  // );
  // const pages = await data.json();

  return (
    <div className="relative">
      <div
        className="qnquiries uppercase text-[20px] leading-[24px]"
        dangerouslySetInnerHTML={{ __html: pages?.content?.rendered }}
      />
    </div>
  );
}
