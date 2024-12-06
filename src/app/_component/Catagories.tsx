import React from "react";
import Image from "next/image";
import Women from "@public/Image/women.jpg";
import Kids from "@public/Image/kids.jpg";
import Men from "../../../public/Image/men.jpg";
import Accessories from "@public/Image/fassion.jpg";

import CategoryCard from "./CategoryCard";

type TProps = {
  categoryList: any;
};

const Catagories = ({ categoryList }: TProps) => {
  // console.log('-=-=-=-=-=-=-=-=-=-=-=',categoryList)

  return (
    <>
      <div>
        <p className="text-center font-black text-xl h-10 mt-80">Catagories</p>
        <p></p>
        <div className="grid grid-cols-3 gap-2 ">
          {categoryList.map((item: any, index: any) => (
            <CategoryCard image={item.image} text={item.name} id={item._id} key={index} />
          ))}
        </div>
        {/* <div className="grid grid-cols-3 gap-2 ">
          <CategoryCard image={Men} text="Men" />
          <CategoryCard image={Women} text="Women" />
          <div>
            <CategoryCard image={Kids} text="Kids" className="h-[270px]" />
            <CategoryCard image={Accessories} text="Accessories" className="h-[270px] mt-[10px]" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Catagories;
