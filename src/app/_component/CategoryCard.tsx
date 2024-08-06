import cn from "@/utils/tailwind";
import Image, { StaticImageData } from "next/image";
import React from "react";

type CProps = {
    image:StaticImageData
    text:string
    className?:string
}
const CatagoryCard = (props:CProps) => {
  return (
    <div className={cn("relative h-[550px] ",props.className)}>
      <Image src={props.image} alt="" className="object-cover" fill />
      <div className=" absolute bg-white p-3 px-5 bottom-3 left-3 font-bold">{props.text}</div>
    </div>
  );
};

export default CatagoryCard;
