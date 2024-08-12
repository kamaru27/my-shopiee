// "use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "@/component/PrimaryButton";
import AddCart from "@/app/_component/AddCart";
import { title } from "process";
import Link from "next/link";
// import { useCart } from "@mrvautin/react-shoppingcart";

const page = async ({ params }: { params: { singleProduct: string } }) => {
  // const { addItem } = useCart();

  const dummy = await fetch(
    "https://dummyjson.com/products/" + params.singleProduct
  );
  const res = await dummy.json();
  const Data = {
    id: res.id,
    image: res.thumbnail,
    name: res.title,
    price: res.price,
    brand: res.brand,
    description: res.description,
  };

  return (
    <>
      <div className="flex ">
        <div className="relative size-[500px]">
          <Image src={Data.image} alt="" fill></Image>
        </div>
        <div className="ml-10 ">
          <p className="text-3xl font-medium mt-20">{Data.name}</p>
          <p className="text-xl font-semibold my-10">{Data.price}/-</p>
          <p className="text-sm font-medium my-10">{Data.brand}</p>
          <p className="from-neutral-500">{Data.description}</p>
          <div className="flex flex-col w-[330px]">
            <Link href={"/cart"}>
              <PrimaryButton
                text="BUY NOW"
                className="bg-globalblue  mt-[20px] w-full h-[40px] rounded-[10px] text-white hover:bg-white hover:text-globalblue hover:border-solid hover:border-2 hover:border-globalblue"
                type="submit"
              />
            </Link>
            <Link href={"/cart"}>
              <AddCart Data={Data} />
            </Link>
            {/* <Button
              text="ADD TO CART"
              className="bg-globalblue  mt-[20px] px-[105px] h-[40px] rounded-[10px] text-white"
              type="submit"
              onClick={() =>
                addItem({
                  id: Data.id,
                  name: Data.title,
                  price: Data.price,
                  ...Data,
                })
              }
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
