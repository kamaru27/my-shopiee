import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "../auth/[...nextauth]/authOptions";

// Asynchronous function to get headers
export const getAxiosHeaders = async () => {
  const session = await getServerSession(authOptions);
  
  console.log("session::::::::", session?.accessToken);
  
  let headers = {};
  if (session?.accessToken) {
    headers = {
      Authorization: `bearer  ` + session.accessToken,
    };
  }

  return headers;
};

// Function to create the axios client with the session headers
export const axiosServer = async () => {
  const headers = await getAxiosHeaders(); // Await headers to be fetched
  return axios.create({
    baseURL: "http://localhost:3005/api/frontend/",
    headers: headers,
  });
};


// import axios from "axios";
// import Cookies from "js-cookie";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/authOptions";

// let headers = {};

//    const session:Promise<any> =  getServerSession(authOptions);
// if (typeof window !== "undefined") {
//   headers = {
//     Authorization: "bearer " + session.accessToken,
//   };
// }

// export const axiosClient = axios.create(
//     {
//         baseURL:'http://localhost:3005/api/frontend/',
//         headers:headers
//     }
// )
