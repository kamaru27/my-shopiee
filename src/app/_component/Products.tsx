import React from "react";
import Product from "@public/Image/product.jpg";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { storageUrl } from "@/utils/baseUrl";

const Data = [
  {
    image: Product,
    heading: "Product",
    description: "Product Description",
    price: 100,
  },
  {
    image: Product,
    heading: "Product",
    description: "Product Description",
    price: 100,
  },
  {
    image: Product,
    heading: "Product",
    description: "Product Description",
    price: 100,
  },
  {
    image: Product,
    heading: "Product",
    description: "Product Description",
    price: 100,
  },
  {
    image: Product,
    heading: "Product",
    description: "Product Description",
    price: 100,
  },
];

type TProps = {
  productList: any;
};

const Products = ({ productList }: TProps) => {
  // console.log("storageUrl:::", storageUrl);
  return (
    <>
      <p className="text-center text-3xl font-extrabold mt-80 mb-20">
        Products
      </p>
      <div className={productList.length>3?'grid grid-cols-4 gap-2 ':"grid grid-cols-2 gap-2 "}>
        {
          productList.map((item: any, i: any) => (
            <div key={i}>
              <div className="relative h-80">
                <Image
                  src={storageUrl + item.image}
                  alt={item.name}
                  className=" object-cover"
                  fill
                />
              </div>
              <div className="">
                <div className="text-xl font-semibold text-center">
                  {item.name}
                </div>
                <div className="text-lg font-medium text-center">
                  {item.price}/-
                </div>
              </div>
            </div>
          ))
          // <ProductCard/>
        }
      </div>
    </>
  );
};

export default Products;
