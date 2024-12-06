"use client";
import React, { useEffect, useState } from "react";
import CountrySelection from "../_component/CountrySelection";
import Link from "next/link";
import CartConfirm from "../_component/CartConfirm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import Billing from "../_component/Billing";
import { useCart } from "@mrvautin/react-shoppingcart";
import { frontendApi } from "../api/frontendApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const mySchema = z.object({
  firstName: string().trim().nonempty({ message: "First Name is required." }),
  lastName: string().trim().nonempty({ message: "Last Name is required." }),
  email: string().email({ message: "Email is required." }),
  phoneNumber: string()
    .trim()
    .nonempty({ message: "Phone Number is required." }),
  address: string().trim().nonempty({ message: "Address is required." }),
  zipCode: string().trim().nonempty({ message: "Zip Code is required." }),
  country: z.string().nonempty({ message: "Please select a country" }),
});

type TMySchema = z.infer<typeof mySchema>;

const OrderPage = () => {
  const router = useRouter();

  const [client, setClient] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });

  const { cartTotal } = useCart();

  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }

  const submitData = async (value: any) => {
    //  console.log(value)
    const productData = window.localStorage.getItem("react-shoppingcart");
    // const userData: any = window.localStorage.getItem("accessToken");
    // const userId:{userId:String} = jwtDecode(userData);

    const billingDetails = value;
    // Parse the data into a JavaScript object
    const parsedData = JSON.parse(productData!);

    // Access the 'items' array from the parsed object
    const items = parsedData.items;

    const datas = { cartItems: items, billingDetails: billingDetails };

    const response = await frontendApi.createOrder(
      datas
    );
    console.log("billingData::",response.data.data)

    if (!response.data.success) {
      toast.error(response.data.message);
      console.log('first',response)
    } else {
      toast.success(response.data.message);
      router.push(`/payment/${response.data.data.sessionId}`)
      // setIsOpen(true);
    }
  };

  return (
    <>
      <div className="md:grid grid-cols-3 mx-10 mb-40">
        <form
          className="col-span-2 lg:mx-10"
          onSubmit={handleSubmit(submitData)}
        >
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
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <p>Last Name</p>
                <input
                  type="text"
                  className="border-solid border-2 h-[40px] border-black rounded-lg mt-3"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="mt-9">
              <p>Phone</p>
              <input
                type="text"
                className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="mt-5">
              <p>Email address</p>
              <input
                type="email"
                className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-5">
              <p>Address</p>
              <textarea
                rows={6}
                className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-600">{errors.address.message}</p>
              )}
            </div>
            <div className="mt-5">
              <p>Zip code</p>
              <input
                type="number"
                className="border-solid border-2 h-[40px] w-[445px] border-black rounded-lg mt-3"
                {...register("zipCode")}
              />
              {errors.zipCode && (
                <p className="text-red-600">{errors.zipCode.message}</p>
              )}
            </div>
            <div className="mt-5">
              <CountrySelection register={register("country")} />
              {errors.country && (
                <p className="text-red-600">{errors.country.message}</p>
              )}
            </div>
            <div className="w-full mt-5">
              <button
                className="bg-globalblue  mt-[20px] px-[105px] h-[40px] rounded-[10px] text-white"
                disabled={isSubmitting}
                type="submit"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>
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
                  Rs. {cartTotal.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
