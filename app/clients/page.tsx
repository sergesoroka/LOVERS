/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import ClientsComp from "@/components/ClientsComp/ClientsComp";
import Header from "@/components/Header";
import ContactComp from "@/components/ContactComp/ContactComp";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Clients() {
  const { resources } = await cloudinary.search
    .expression("folder:clients")
    .execute();

  return (
    <div className="relative">
      <div className="pt-[22px] px-[24px] bg-[#151515]">
        <Header />
        <div className="mt-20">
          <ClientsComp resources={resources} />
        </div>
        <ContactComp mode="light" />
      </div>
    </div>
  );
}
