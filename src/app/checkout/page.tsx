import React from "react";
import CountrySelection from "../_component/CountrySelection";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-3 mx-10 mb-40">
        <div className="col-span-2 mx-10">
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
        </div>
        <div>
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
                  Rs. 2,000.00
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center mt-5">
            <Link href={"/order"}>
              <button className="bg-globalblue  mt-[20px] px-[105px] h-[40px] rounded-[10px] text-white">
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
