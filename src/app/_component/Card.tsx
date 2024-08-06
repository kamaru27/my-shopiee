import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CProps = {
  image?: StaticImageData;
  text: string;
  className?: string;
};

const Card = (props: CProps) => {
  return (
    <Link href={"/shop/" + props.text}>
      <div className="relative flex justify-center items-center mt-10 ">
        {props.image ? (
          <Image
            src={props.image}
            alt="category image"
            className="size-80 object-cover"
          />
        ) : (
          <div className="bg-orange-400 size-80"></div>
        )}

        <div className="absolute flex justify-center font-extrabold text-2xl text-white shadow-black shadow-inner">
          {props.text}
        </div>
      </div>
    </Link>
  );
};

export default Card;
