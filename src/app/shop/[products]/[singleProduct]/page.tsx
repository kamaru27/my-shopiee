import React from "react";
import product from "@public/Image/product.jpg";
import Image from "next/image";
import Button from "@/component/primaryButton";

const page = async ({ params }: { params: { singleProduct: string } }) => {
  const dummy = await fetch(
    "https://dummyjson.com/products/" + params.singleProduct
  );
  const Data = await dummy.json();

  return (
    <>
      <div className="flex ">
        <div className="relative size-[500px]">
          <Image src={Data.thumbnail} alt="" fill></Image>
        </div>
        <div className="ml-10 ">
          <p className="text-3xl font-medium mt-20">{Data.title}</p>
          <p className="text-xl font-semibold my-10">{Data.price}/-</p>
          <p className="text-sm font-medium my-10">{Data.brand}</p>
          <p className="from-neutral-500">{Data.description}</p>
          <div className="flex flex-col w-[330px]">
            <Button text="BUY NOW"/>
            <Button text="ADD TO CART"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;