"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import { storageUrl } from "@/utils/baseUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartTotal = () => {
    const router =useRouter()
  const { cartTotal } = useCart();
  const [client, setClient] = useState(false);
  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }
  function checkOut(){
router.push('/checkout')
  }

  return (
    <>
      <p className="text-center text-3xl font-black border border-solid ">
        Cart Total
      </p>
      <div className="flex justify-evenly my-4">
        <p className="">Shipping</p>
        <p className="">30</p>
      </div>
      <div className="flex justify-evenly my-4">
        <p className="">Total</p>
        <p className="">{cartTotal == 0 ? "" : cartTotal + 30}</p>
      </div>
      <div className="flex justify-center">

          <button className=" bg-white  mt-[20px] px-[50px] h-[40px] rounded-[10px]  text-globalblue hover:bg-globalblue hover:text-white" onClick={checkOut}>
            Check Out
          </button>
      </div>
    </>
  );
};

export default CartTotal;
