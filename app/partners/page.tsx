import Header from "@/components/Header";
import PartnersComp from "@/components/PartnersComp/PartnersComp";

export default async function PartnersPage() {
  return (
    <div className="pt-[22px] px-[24px] bg-[#151515] h-screen">
      <Header />
      <PartnersComp mode="dark" />
    </div>
  );
}
