import Image from "next/image";

import daniil from "./../../public/daniil.png";
import mari from "./../../public/mari.png";

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
