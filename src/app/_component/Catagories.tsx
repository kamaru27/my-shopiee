import React from "react";
import Image from "next/image";
import Women from "@public/Image/women.jpg";
import Kids from "@public/Image/kids.jpg";
import Men from "../../../public/Image/men.jpg";
import Accessories from "@public/Image/fassion.jpg";

import CatagoryCard from "./CatagoryCard";

const Catagories = () => {
  return (
    <>
      <div>
        <p className="text-center font-black text-xl h-10 mt-80">Catagories</p>
        <p></p>
        <div className="grid grid-cols-3 gap-2 ">
          <CatagoryCard image={Men} text="Men" />
          <CatagoryCard image={Women} text="Women" />
          <div>
            <CatagoryCard image={Kids} text="Kids" className="h-[270px]" />
            <CatagoryCard image={Accessories} text="Accessories" className="h-[270px] mt-[10px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagories;
