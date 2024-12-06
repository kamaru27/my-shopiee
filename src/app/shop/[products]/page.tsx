import React from "react";
import Image from "next/image";
import Link from "next/link";
import { frontendApi } from "@/app/api/frontendApi";
import Products from "@/app/_component/Products";
import { storageUrl } from "@/utils/baseUrl";
import stock from "@public/Image/we-are-out-of-stock.jpg";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

async function getProductsByCategory(id: any) {
  try {
    const response = await frontendApi.getProductsByCategory(id);
    // const Products = await response.json();

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }: { params: { products: string } }) => {
  const response = await getProductsByCategory(params.products);
  const products = response.data;

  return (
    <div className="relative">
      {/* <div className="text-2xl text-center">{params.products} Category</div> */}
      <p className="text-center text-3xl font-extrabold mb-20">Products</p>
      {products.length>0 ?(<div className="grid grid-cols-4 gap-2 m-20">
        {products.map(
          (
            item:any,
            i:number
          ) => (
            <div className="h-full" key={i}>
              <Link
                
                href={"/shop/"+params.products+ '/'+ item._id}
                className="h-full block"
              >
                <div className="relative h-[200px] w-full"><Image src={storageUrl + item.image} alt="" className="h-80 object-cover absolute" fill/></div>
                <div className="">
                  <div className="text-xl font-semibold text-center">
                    {item.name}
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
      </div>):<div className="h-[30rem] w-[50rem]"><Image src={stock} alt=""  fill /></div>}
      
    </div>
  );
};

export default page;
