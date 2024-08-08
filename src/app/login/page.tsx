"use client";
import React from "react";
import Image from "next/image";
import BgImage from "@public/Image/login.jpg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const mySchema = z.object({
  userName: string().min(1, { message: "Username is required." }),
  password: string().min(8, { message: "Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });
  const submitData = () => {};

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
                type="text"
                placeholder="Username"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base mb-3"
                {...register("userName")}
              />
              {errors.userName && (
                <p className="text-red-600">{errors.userName.message}</p>
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

            <p className="mt-[10px] sm:text-base text-xs">Don't have an account?</p>
            <Link href={"/sign-up"} className="sm:text-base text-xs">Sign Up</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
