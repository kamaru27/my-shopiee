import React from "react";
import CartItems from "../_component/CartItems";
import Link from "next/link";

const cartPage = () => {
  return (
    <div className="grid grid-cols-3">
      <table className="col-span-2">
        <thead className="bg-gray-500 h-[40px]">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <CartItems />
        </tbody>
      </table>
      <div className="col-span-1">
        <p className="text-center text-3xl font-black border border-solid ">
          Cart Total
        </p>
        <div className="flex justify-evenly my-4">
          <p className="">Shipping</p>
          <p className="">20</p>
        </div>
        <div className="flex justify-evenly my-4">
          <p className="">Total</p>
          <p className="">120</p>
        </div>
        <div className="flex justify-center">
          <Link href={'/checkout'}><button className=" bg-white  mt-[20px] px-[50px] h-[40px] rounded-[10px]  text-globalblue hover:bg-globalblue hover:text-white" >Check Out</button></Link>
        </div>
      </div>
    </div>
  );
};

export default cartPage;
