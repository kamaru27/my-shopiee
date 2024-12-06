'use client'
import React from "react";
import Image from "next/image";
import BgImage from "@public/Image/login.jpg";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { frontendApi } from "../api/frontendApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const mySchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().min(1, { message: "Email is required." }),
  password: z.string().min(8, { message: "Password min 8 is required." }),
  confirmedPassword: z.string().min(8, { message: "Confirm Password min 8 is required." }),
});

type TMySchema = z.infer<typeof mySchema>;

const SignUpPage = () => {
const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });
  const submitData = async (data:any) => {
    try {
      const SignUp = await frontendApi.userSignUp(data)
      toast.success(SignUp.data.message)
      router.push('/login')
    // return SignUp.data.data
    } catch (err:any) {
      toast.error(err.message);
    }
  };

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
            onSubmit={handleSubmit(submitData)}
            className=" bg-white/25 rounded-[30px] sm:w-[350px] w-[270px] h-[370px] sm:h-[430px] flex flex-col items-center justify-center"
          >
            <p className="sm:text-xl text-lg">Create your account</p>
            <p className="sm:text-base text-xs">Please enter your details!</p>
            <div className="flex flex-col justify-center items-center mt-[30px] sm:mt-[35px] w-[80%] gap-3">
              <input
                type="text"
                placeholder="Name"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base"
                {...register("name")}
              />{errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
              <input
                type="email"
                placeholder="Email"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base"
                {...register("email")}
              />{errors.email && (
                <p className="text-red-600 text-xs text-start">{errors.email.message}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base"
                {...register("password")}
              />{errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                className="sm:px-[10px] px-[5px] sm:py-[7px] py-[5px] border-solid border-slate-400 border-[1px] rounded-lg sm:w-full w-[80%] text-sm sm:text-base"
                {...register("confirmedPassword")}
              />{errors.confirmedPassword && (
                <p className="text-red-600">{errors.confirmedPassword.message}</p>
              )}
              <button className="bg-globalblue sm:mt-[20px] mt-[10px] sm:px-[105px] sm:h-[40px] h-[30px] sm:w-full w-[80%] rounded-[10px] sm:text-base text-xs">
                Sign Up
              </button>
            </div>

            <div className="flex gap-1 mt-3 sm:text-sm text-xs">
              <p>Already have an account?</p>
              <Link
                href={"/login"}
                className="text-blue-600 hover:text-blue-950"
              >
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
