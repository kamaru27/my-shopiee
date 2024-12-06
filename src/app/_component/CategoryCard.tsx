import { storageUrl } from "@/utils/baseUrl";
import cn from "@/utils/tailwind";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CProps = {
    image:string
    text:string
    className?:string
    id:string
}
const CategoryCard = (props:CProps) => {
  // console.log('-=-=-=-=-=-=-=-=-=-',props.image)
  return (
    <Link href={"/shop/" + props.id}>
    <div className={cn("relative h-[550px] w-[400px] ",props.className)}>
      <Image src={storageUrl+props.image} alt="Men Image" className="object-cover" fill />
      <div className=" absolute bg-white p-3 px-5 bottom-3 left-3 font-bold">{props.text}</div>
    </div>
    </Link>
  );
};

export default CategoryCard;
