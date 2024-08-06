"use client";
import React from "react";
import Women from "@public/Image/women.jpg";
import Kids from "@public/Image/kids.jpg";
import Men from "../../../public/Image/men.jpg";
import Accessories from "@public/Image/fassion.jpg";
import Card from "../_component/Card";

const page = async () => {
  const dummy = await fetch("https://dummyjson.com/products/categories");
  const fullData = await dummy.json();

  return (
    <>
      <div>
        <p className="text-center font-black text-xl h-10 mt-32">Catagories</p>
      </div>
      <div className="grid grid-cols-4 gap-8 p-32">
        <Card image={Men} text="Men" className="group-hover:shadow-slate-950"/>

        <Card image={Women} text="Women" />

        <Card image={Kids} text="Kids" />

        <Card image={Accessories} text="Accessories" />

        {fullData.map((item: { name: string;},i: any)=>(
          <>
          <Card  text={item.name}/>
          </>
        ))}
      </div>
    </>
  );
};

export default page;
