import React from "react";
import Product from "@public/Image/product.jpg";
import ProductCard from "./ProductCard";
import Image from "next/image";

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

const Products = () => {
  return (
    <>
      <p className="text-center text-3xl font-extrabold mt-80 mb-20">
        Products
      </p>
      <div className="grid grid-cols-4 gap-2">
        {
          Data.map((item, i) => (
            <div key={i}>
              <Image src={item.image} alt="" className="h-80 object-cover" />
              <div className="bg-orange-300">
                <div className="text-xl font-semibold text-center">
                  {item.heading}
                </div>
                <div className="text-sm font-light text-center">
                  {item.description}
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
