/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Image from "next/image";
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
          <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center pt-6 px-8">
            {resources.map((img) => {
              return (
                <Image
                  key={img.asset_id}
                  className="mx-auto"
                  src={img.secure_url}
                  width={160}
                  height={160}
                  alt="img"
                />
              );
            })}
          </div>
        </div>
        <ContactComp mode="light" />
      </div>
    </div>
  );
}
