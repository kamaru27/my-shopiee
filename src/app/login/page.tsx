"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BgImage from "@public/Image/login.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const mySchema = z.object({
  email: string().min(1, { message: "Email is required." }),
  password: string().min(3, { message: "Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const LoginPage = () => {

  const [client, setClient] = useState(false);

  const router = useRouter();

    const session = getSession();
    console.log('session login Page',session)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });

  const submitData = async (data: TMySchema) => {
    try {
      const signedIn = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      // console.log("signedIn", signedIn);
      if (signedIn?.ok) {
        toast.success("Successfully Login");
        router.back();
      } else {
        toast.error("Something Wrong");
        console.log("err", signedIn?.error);
      }
    } catch (err) {
      toast.error("Something Wrong");
      console.log("erorrrrrrrrrrrrrr::::",err);
    }
  };

  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }

  return (
    <>
      <div className="w-full h-[100vh] relative flex justify-center items-center">
        <Image
          src={BgImage}
          alt=""
          className="w-full h-[100%] absolute "
        ></Image>
        <div className="absolute flex flex-col items-center">
          <form
            className=" bg-white/25 rounded-[30px] sm:w-[350px] w-[300px] h-[300px] sm:h-[370px] flex flex-col items-center justify-center"
            onSubmit={handleSubmit(submitData)}
          >
            <p className="sm:text-xl text-lg">Log in to your account</p>
            <p className="sm:text-base text-xs">Please enter your details!</p>
            <div className="flex flex-col justify-center items-center sm:mt-[35px] mt-[20px] w-[80%]">
              <input
                type="email"
                placeholder="Email"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base mb-3"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-globalblue sm:mt-[20px] mt-[10px] sm:px-[105px] sm:h-[40px] h-[30px] sm:w-full w-[80%] rounded-[10px] sm:text-base text-xs"
              >
                Login
              </button>
            </div>
            <div className="flex gap-1 mt-[10px] sm:text-sm text-xs">
              <p>Don&apos;t have an account?</p>
              <Link
                href={"/sign-up"}
                className="text-blue-600 hover:text-blue-950"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
