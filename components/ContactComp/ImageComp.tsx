import Image from "next/image";

import daniil from "./../../public/daniil.png";
import mari from "./../../public/mari.png";
// import lovers1 from "./../../public/lovers-1.png";
// import lovers2 from "./../../public/lovers2.png";
// import lovers3 from "./../../public/lovers3.png";

export default function ImageComp({ name }) {
  return (
    <Image
      src={name == "daniil" ? daniil : mari}
      width={69}
      height={81}
      alt="Picture of the author"
    />
  );
}
