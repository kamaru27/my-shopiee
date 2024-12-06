"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SvgComponent from "../../svg/Svg";
import Svg2 from "../../svg/Svg2";
import SideBar from "./SideBar";
import { useCart } from "@mrvautin/react-shoppingcart";
import { signOut } from "next-auth/react";

const header = [
  { name: "Home", Link: "/" },
  { name: "Shop", Link: "/shop" },
  { name: "Contact", Link: "/contact" },
  { name: "Login", Link: "/login" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);

  const { totalUniqueItems } = useCart();

  const [client, setClient] = useState(false);
  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }
  const click = () => {
    if (menu != true) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <>
      {menu == true ? <SideBar /> : ""}
      <div className="h-20 bg-white ">
        <div
          className="
       pl-14 text-globalblue text-global-font-h5 font-medium"
        >
          <div className="flex sm:mr-7 pr-3 h-full items-center justify-center">
            <div className="hidden sm:flex items-center gap-[43px] pr-3">
              <div>{header.at(0)?.name}</div>
              <div>{header.at(1)?.name}</div>
              <p className="font-semibold text-2xl">E-Shop</p>
              <div>{header.at(2)?.name}</div>
              <div>{header.at(3)?.name}</div>
              <div onClick={() => signOut()}>signout</div>

              {/* {header.map((item, index) => (
              <Link key={index} className="" href={item.Link}>
                {item.name}
              </Link>
            ))} */}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="relative p-[10px] mr-7 pr-[6px] pt-[5px] mt-[10px] ">
            {totalUniqueItems > 0 ? (
              <div className="rounded-full bg-globalblue size-4 text-white flex justify-center items-center absolute top-0 right-0 text-[14px]">
                {totalUniqueItems}
              </div>
            ) : (
              ""
            )}
            <Link href={"/cart"}>
              <SvgComponent className="size-8" />
            </Link>
          </div>
          <Svg2
            className="size-7 mr-5 sm:hidden relative pt-[5px] mt-[12px] "
            onClick={() => click()}
          />
        </div>
      </div>
    </>
  );
};
export default Header;
