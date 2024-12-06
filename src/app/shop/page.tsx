import React from "react";
import Women from "@public/Image/women.jpg";
import Kids from "@public/Image/kids.jpg";
import Men from "../../../public/Image/men.jpg";
import Accessories from "@public/Image/fassion.jpg";
import Card from "../_component/Card";
import { frontendApi } from "../api/frontendApi";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

async function categoryPageData() {
  try {
    const categoryPage :any =await frontendApi.getCategoryPageData()
    return categoryPage.data.data
  } catch (error: any) {
      // toast.error(error.message)
      console.log(error.message)
  }
}

const page = async () => {

  const categoryPage = await categoryPageData();
  const session = await getServerSession(authOptions);
  console.log("session shop pagee:::::", session);
  // const dummy = await fetch("https://dummyjson.com/products/categories");
  // const fullData = await dummy.json();

  return (
    <>
      <div>
        <p className="text-center font-black text-xl h-10 mt-32">Catagories</p>
      </div>
      <div className="grid grid-cols-4 gap-8 p-32">
      <Card categoryList={categoryPage}/>
        {/* <Card image={Men} text="Men" className="group-hover:shadow-slate-950" />

        <Card image={Women} text="Women" />

        <Card image={Kids} text="Kids" />

        <Card image={Accessories} text="Accessories" /> */}

        {/* {categoryList.map((item: { name: string ,image:string}, i: any) => (
          <Card text={item.name} key={i} />
        ))} */}
      </div>
    </>
  );
};

export default page;
