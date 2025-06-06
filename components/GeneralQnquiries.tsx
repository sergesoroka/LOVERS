import "./components.css";

export default async function GeneralQnquiries({ data }) {
  return (
    <div className="relative qnquiries uppercase text-[20px] leading-[24px]">
      <span className="block my-0 font-semibold">{data?.docs[2].name}:</span>
      <span className="block my-0">{data?.docs[2].contact}</span>
    </div>
  );
}
