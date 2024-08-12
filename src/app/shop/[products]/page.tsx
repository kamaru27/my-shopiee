import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Product from "@public/Image/product.jpg";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

// const Data = [
//   {
//     image: Product,
//     heading: "Product-1",
//     description: "Product Description",
//     price: 100,
//   },
//   {
//     image: Product,
//     heading: "Product-2",
//     description: "Product Description",
//     price: 100,
//   },
//   {
//     image: Product,
//     heading: "Product-3",
//     description: "Product Description",
//     price: 100,
//   },
//   {
//     image: Product,
//     heading: "Product-4",
//     description: "Product Description",
//     price: 100,
//   },
//   {
//     image: Product,
//     heading: "Product-5",
//     description: "Product Description",
//     price: 100,
//   },
// ];

const page = async ({ params }: { params: { products: string } }) => {
  const dummy = await fetch("https://dummyjson.com/products/category/"+params.products);
  const Data = await dummy.json();
  
 
  return (
    <>
      <div className="text-2xl text-center">{params.products} Category</div>
      <p className="text-center text-3xl font-extrabold mb-20">Products</p>
      <div className="grid grid-cols-4 gap-2 m-20">
        {Data.products.map(
          (
            item:any,
            i:number
          ) => (
            <div className="h-full" key={i}>
              <Link
                
                href={"/shop/"+params.products+ '/'+ item.id}
                className="h-full block"
              >
                <div className="relative h-[200px] w-full"><Image src={item.thumbnail} alt="" className="h-80 object-cover absolute" fill/></div>
                <div className="">
                  <div className="text-xl font-semibold text-center">
                    {item.title}
                  </div>
                  {/* <div className="text-sm font-light text-center">
                    {item.description}
                  </div> */}
                  <div className="text-lg font-medium text-center">
                    {item.price}/-
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default page;
