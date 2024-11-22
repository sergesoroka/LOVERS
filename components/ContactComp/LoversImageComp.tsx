import Image from "next/image";

import lovers1 from "./../../public/lovers-1.png";
import lovers2 from "./../../public/lovers2.png";
import lovers3 from "./../../public/lovers3.png";

export default function LoversImageComp({ number, h, w }) {
  let filename;

  switch (number) {
    case "1":
      filename = lovers1;
      break;
    case "2":
      filename = lovers2;
      break;
    case "3":
      filename = lovers3;
      break;
    default:
      filename = lovers1;
  }
  return (
    <Image src={filename} width={w} height={h} alt="Picture of the author" />
  );
}
