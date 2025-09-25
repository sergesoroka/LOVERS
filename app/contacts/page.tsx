import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

export default async function Home() {
  return (
    <div className="pt-[22px] px-[24px] bg-[#1400ff] overflow-hidden h-screen">
      <Header />

      <ContactComp mode="dark" />
    </div>
  );
}
