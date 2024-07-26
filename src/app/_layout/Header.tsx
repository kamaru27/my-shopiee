"use client";
import Link from "next/link";
import React, { useState } from "react";
import SvgComponent from "../_svg/Svg";
import Svg2 from "../_svg/Svg2";
import SideBar from "./SideBar";

const header = [
  { name: "Home", Link: "/" },
  { name: "Shop", Link: "/Shop" },
  { name: "Contact", Link: "/Contact" },
  { name: "Login", Link: "/Login" },
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
       pl-14 text-globalblue text-global-font-h5"
      >
        My-Shopiee
        
        <div className="flex ">
          <div className="hidden sm:flex items-center gap-[45px] mr-11">
            {header.map((item, index) => (
              <Link key={index} className="" href={item.Link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="relative p-[10px]">
            <div className="rounded-full bg-globalblue size-5 text-white flex justify-center items-center absolute top-0 right-0 text-[14px]">
              0
            </div>
            <Link href={"/Cart"}>
              <SvgComponent className="size-10" />
            </Link>
          </div>
        </div>
        
        <Svg2 className="size-7 mr-5 sm:hidden " onClick={() => click()} />
        
      </div>
    </>
  );
};
export default Header;
