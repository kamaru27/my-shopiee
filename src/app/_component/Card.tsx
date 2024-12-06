import { storageUrl } from "@/utils/baseUrl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CProps = {
  categoryList: any;
  className?: string;
};

const Card = ({ categoryList, className }: CProps) => {
  // console.log(categoryList);
  return (
    <>
      {categoryList.map((item: any, index: any) => (
        <Link href={"/shop/" + item._id} key={index}>
          <div className="relative flex justify-center items-center mt-10 ">
            {item.image ? (
              <Image
                src={storageUrl + item.image}
                alt="category image"
                width={1000}
                height={1000}
                className="size-80 object-cover"
              />
            ) : (
              <div className="bg-orange-400 size-80"></div>
            )}

            <div className="absolute flex justify-center font-extrabold text-2xl text-black shadow-black shadow-inner">
              {item.name}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
