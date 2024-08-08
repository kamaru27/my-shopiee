import React from "react";
import Image from "next/image";
import ProductImage from "@public/Image/product.jpg";

const page = () => {
  return (
    <div className="grid grid-cols-3">
      <table className="table-auto col-span-2">
        <thead className="bg-gray-500">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>{''}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex justify-center">
              <div className="flex items-center">
                <Image src={ProductImage} alt="" className="size-20"></Image>
                <p>Product</p>
              </div>
            </td>
            <td className="text-center">100</td>
            <td>
              <div className="flex justify-center gap-1 text-center items-center">
                <button>-</button>
                <div className="size-6 border border-solid text-sm">
                  1
                </div>
                <button>+</button>
              </div>
            </td>
            <td className="text-center">
                100
            </td>
            <td>
                <button className="border-[0px] text-xs text-globalblue text-center hover:text-black">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="col-span-1">
        <p className="text-center text-3xl font-black border border-solid ">
          Card Total
        </p>
      </div>
    </div>
  );
};

export default page;
