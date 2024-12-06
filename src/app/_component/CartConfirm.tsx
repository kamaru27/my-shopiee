"use client";
import React from "react";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import { storageUrl } from "@/utils/baseUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

const mySchema = z.object({
  email: string().min(1, { message: "Email is required." }),
  password: string().min(8, { message: "Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const CartConfirm = () => {
    const router =useRouter()
  const { cartTotal } = useCart();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });
  const submitData = () => {};
  return (
    <>
      <table className="w-full">
            <thead>
              <tr>
                <th className="text-start text-2xl font-extrabold">Product</th>
                <th className="text-end text-2xl font-extrabold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm">Product x 1</td>
                <td className="text-end text-sm">Rs. 2,000.00</td>
              </tr>
              <tr>
                <td className="text-sm">Subtotal</td>
                <td className="text-end text-sm">Rs. 2,000.00</td>
              </tr>
              <tr>
                <td className="text-lg font-extrabold ">Total</td>
                <td className="text-end text-xl font-extrabold">
                  Rs. {cartTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
    </>
  );
};

export default CartConfirm;
