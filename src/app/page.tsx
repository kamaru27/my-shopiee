import toast from "react-hot-toast";
import Carousal from "./_component/CarousalNew";
import Catagories from "./_component/Catagories";
import Products from "./_component/Products";
import { frontendApi } from "./api/frontendApi";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { getSession } from "next-auth/react";

async function homepageData() {
  try {
    const session = await getServerSession(authOptions);
     console.log("session homePage:::::", session);
    const homePage: any = await frontendApi.getHomePageData();
    const carousalPage: any = await frontendApi.getBannerCarousal();
    // console.log(carousalPage.data.data)
    return {
      homePage: homePage.data.data,
      carousalPage: carousalPage.data.data,
    };
  } catch (error: any) {
    // toast.error(error.message)
    console.log(error);
  }
}

export default async function Home() {
  const homepage: any = await homepageData();
  const homeCategory = homepage?.homePage.category;
  const homeProduct = homepage?.homePage.featured;
  const carousal = homepage?.carousalPage;
  return (
    <>
      <Carousal banner={carousal} />
      <Catagories categoryList={homeCategory} />
      <Products productList={homeProduct} />
    </>
  );
}
