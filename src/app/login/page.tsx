import React from "react";
import Image from "next/image";
import BgImage from "@public/Image/login.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative">
        <Image
          src={BgImage}
          alt=""
          className="w-full h-[100%] absolute "
        ></Image>
        <form className="absolute top-[50%] bg-white/25">
          <p>Log in to your account</p>
          <p>Please enter your details!</p>
          <div className="flex flex-row">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="bg-globalblue">Login</button>
          </div>
          <p>Don't have an account?</p>
          <Link href={"/sign-up"}>Sign Up</Link>
        </form>
      </div>
    </>
  );
};

export default page;
