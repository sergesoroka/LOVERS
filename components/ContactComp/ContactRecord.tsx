export default async function ContactRecord({ contact }) {
  return (
    <div className="relative qnquiries uppercase text-[20px] leading-[24px]">
      <span className="block my-0 font-semibold">{contact.name}:</span>
      <span className="block my-0">{contact.contact}</span>
    </div>
  );
}
