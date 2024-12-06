import React from "react";
import CartItems from "../_component/CartItems";
import Link from "next/link";
import CartTotal from "../_component/CartTotal";

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
        <CartTotal/>
      </div>
    </div>
  );
};

export default cartPage;
