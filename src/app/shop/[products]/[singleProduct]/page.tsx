// "use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "@/component/PrimaryButton";
import AddCart from "@/app/_component/AddCart";
import { title } from "process";
import Link from "next/link";
import { frontendApi } from "@/app/api/frontendApi";
import { storageUrl } from "@/utils/baseUrl";
// import { useCart } from "@mrvautin/react-shoppingcart";

async function getProduct(id: any) {
  try {
    const response = await frontendApi.getProduct(id);
    // const Products = await response.json();

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }: { params: { singleProduct: string } }) => {
  const response = await getProduct(params.singleProduct);
  const product = response.data;

  // const { addItem } = useCart();

  // const dummy = await fetch(
  //   "https://dummyjson.com/products/" + params.singleProduct
  // );
  // const res = await dummy.json();
  // const Data = {
  //   id: res.id,
  //   image: res.thumbnail,
  //   name: res.title,
  //   price: res.price,
  //   brand: res.brand,
  //   description: res.description,
  // };

  return (
    <>
      <div className="flex ">
        <div className="relative size-[500px]">
          <Image src={storageUrl + product.image} alt="" fill className="object-cover"></Image>
        </div>
        <div className="ml-10 ">
          <p className="text-3xl font-medium mt-20">{product.name}</p>
          <p className="text-xl font-semibold my-10">{product.price}/-</p>
          <p className="text-sm font-medium my-10">{product.brand.name}</p>
          <p className="from-neutral-500">{product.description}</p>
          <div className="flex flex-col w-[330px]">
            <Link href={"/cart"}>
              <PrimaryButton
                text="BUY NOW"
                className="bg-globalblue  mt-[20px] w-full h-[40px] rounded-[10px] text-white hover:bg-white hover:text-globalblue hover:border-solid hover:border-2 hover:border-globalblue"
                type="submit"
              />
            </Link>
            <Link href={"/cart"}>
              <AddCart Data={product} />
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
