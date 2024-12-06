import { axiosServer } from "./config/axiosConfig";
import { axiosClient } from "./config/axiosConfigClient";

export const frontendApi = {
  getHomePageData: async function () {
    const client = await axiosServer();
    const response = await client.get("homePage/");
    return response
  },
  getCategoryPageData: async function () {
    const client = await axiosServer();
    const response = await client.get("categoryPage/");
    return response

  },
  userSignIn: async function (body: any) {
    const client = await axiosClient();
    const response = await client.post("user/login", body);
    console.log("response::::::",response.data)
    return response

  },
  getBannerCarousal: async function () {
    const client = await axiosServer();
    const response = await client.get("bannerPage/");
    return response
  },
  getProductsByCategory: async function (categoryId: any) {
    const client = await axiosServer();
    const response = await client.get(
      `productsPage/productsByCategory/${categoryId}`
    );
    return response
  },
  getProduct: async function (productId: any) {
    const client = await axiosServer();
  const response =  await client.get(`productsPage/product/${productId}`);
  return response
  },
  createOrder: async function ( body: any) {
    const client = await axiosClient();
    const response = await client.post('order/', body
      // const token = Cookies.get("accessToken");
      //   {
    //   headers: {
    //     Authorization: `Bearer ${session?.accessToken}`,
    //   },
    // }
  );
  return response
  },
};
