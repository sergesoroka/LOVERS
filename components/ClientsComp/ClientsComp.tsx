import React from "react";
import Image from "next/image";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function ClientsComp() {
  const { resources } = await cloudinary.search
    .expression("folder:clients")
    .execute();

  return (
    <div>
      <h2 className="pagesTitle text-[#1400ff] ml-11 contactsTitle uppercase text-[98px] leading-[84px] md:mt-[60px]  md:text-[160px] md:leading-[140px]">
        Clients
      </h2>
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
  );
}

export default ClientsComp;
