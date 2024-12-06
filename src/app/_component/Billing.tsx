"use client";
import React from "react";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import { storageUrl } from "@/utils/baseUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CountrySelection from "./CountrySelection";
import { string, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const mySchema = z.object({
  email: string().min(1, { message: "Email is required." }),
  password: string().min(8, { message: "Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const Billing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });
  const submitData = () => {};

  const router = useRouter();
  const { cartTotal } = useCart();

  function confirmOrder() {
    router.push("/order");
  }

  return (
    <>
      <form className="col-span-2 lg:mx-10">
        <div>
          <p className="text-2xl">Billing details</p>
        </div>
        <div className="gap-x-5 ">
          <div className="flex gap-3 mt-5">
            <div>
              <p>First Name</p>
              <input
                type="text"
                className="border-solid border-2 h-[40px] border-black rounded-lg mt-3 "
              ></input>
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                className="border-solid border-2 h-[40px] border-black rounded-lg mt-3"
              ></input>
            </div>
          </div>
          <div className="mt-9">
            <p>Phone</p>
            <input
              type="text"
              className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
            ></input>
          </div>
          <div className="mt-5">
            <p>Email address</p>
            <input
              type="email"
              className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
            ></input>
          </div>
          <div className="mt-5">
            <p>Address</p>
            <input
              type="text"
              className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
            ></input>
          </div>
          <div className="mt-5">
            <p>Zip code</p>
            <input
              type="number"
              className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
            ></input>
          </div>
          <div className="mt-5">
            <CountrySelection />
          </div>
        </div>
      </form>
    </>
  );
};

export default Billing;
