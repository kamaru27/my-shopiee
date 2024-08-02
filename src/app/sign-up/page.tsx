import React from 'react'
import Image from "next/image";
import BgImage from "@public/Image/login.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
    <div className="w-full h-[100vh] relative flex justify-center items-center">
        <Image
          src={BgImage}
          alt=""
          className="w-full h-[100%] absolute "
        ></Image>
        <div className="absolute flex flex-col items-center">
        <form className=" bg-white/25 rounded-[30px] w-[350px] h-[370px] flex flex-col items-center justify-center">
          <p className="text-xl">Log in to your account</p>
          <p className="">Please enter your details!</p>
          <div className="flex flex-col justify-center mt-[35px] w-[80%] gap-3">
            <input type="text" placeholder="Username" className="px-[10px] py-[7px] border-solid border-slate-400 border-[1px] rounded-lg w-full"/>
            <input type="password" placeholder="Password" className="px-[10px] py-[7px] border-solid border-slate-400 border-[1px] rounded-lg w-full"/>
            <button className="bg-globalblue mt-[20px] px-[105px] h-[40px] rounded-[10px]">Sign Up</button>
          </div>
          

          <p>Don't have an account?</p>
          <Link href={"/sign-up"}>Sign Up</Link>
        </form>
      </div>
      </div>
    </>
  )
}

export default page