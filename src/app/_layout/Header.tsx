"use client";
import Link from "next/link";
import React, { useState } from "react";
import SvgComponent from "../../svg/Svg";
import Svg2 from "../../svg/Svg2";
import SideBar from "./SideBar";


const header = [
  { name: "Home", Link: "/" },
  { name: "Shop", Link: "/shop" },
  { name: "Contact", Link: "/contact" },
  { name: "Login", Link: "/login" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);

  const click = () => {
    if (menu != true) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    console.log(menu);
  };
  return (
    <>
      {menu == true ? <SideBar /> : ""}

      <div
        className="bg-white h-20 flex items-center justify-between
       pl-14 text-globalblue text-global-font-h5 font-medium"
      >
        <p className="font-semibold">My-Shopiee</p>

        <div className="flex sm:mr-7 pr-3">
          <div className="hidden sm:flex items-center gap-[43px] pr-3">
            {header.map((item, index) => (
              <Link key={index} className="" href={item.Link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="relative p-[10px] mr-7 pr-[6px] pt-[5px] mt-[10px] ">
            <div className="rounded-full bg-globalblue size-4 text-white flex justify-center items-center absolute top-0 right-0 text-[14px]">
             0
            </div>
            <Link href={"/cart"}>
              <SvgComponent className="size-8" />
            </Link>
          </div>
          <Svg2 className="size-7 mr-5 sm:hidden relative pt-[5px] mt-[12px] " onClick={() => click()} />
        </div>
      </div>
    </>
  );
};
export default Header;
