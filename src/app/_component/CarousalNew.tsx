// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import Link from "next/link";
// import { storageUrl } from "@/utils/baseUrl";

// type TProps = {
//   banner: {
//     image: string;
//     category: string;
//   }[];
// };

// const Carousel = ({ banner }: TProps) => {
//   return (
//     <section className="relative w-full min-h-screen flex justify-center items-center bg-gradient-radial from-purple-500 to-blue-400 overflow-hidden">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2,
//           slideShadows: true,
//         }}
//         loop={true}
//         pagination={{ clickable: true }}
//         spaceBetween={60}
//         modules={[EffectCoverflow, Pagination]}
//         className="swiper w-full py-12"
//       >
//         {banner.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             className={`swiper-slide swiper-slide--${index + 1}`}
//           >
//             <div className="flex flex-col justify-end items-start w-full h-full relative p-6 text-white">
//               <Link href={`/shop/${item.category}`}>
                
//                   <h2 className="font-roboto text-lg font-medium mb-3">
//                     Explore {item.category}
//                   </h2>
                
//               </Link>
//               <p className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-6 h-6 mr-2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                   />
//                 </svg>
//                 {item.category} Location
//               </p>
//             </div>
//             <Image
//               src={storageUrl + item.image}
//               layout="fill"
//               objectFit="cover"
//               alt={`Banner for ${item.category}`}
//               className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
//             />
//           </SwiperSlide>
//         ))}
//         <div className="swiper-pagination"></div>
//       </Swiper>
//     </section>
//   );
// };

// export default Carousel;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import Link from "next/link";
import { storageUrl } from "@/utils/baseUrl";

type TProps = {
  banner: {
    image: string;
    category: string;
  }[];
};

const Carousal = ({ banner }: TProps) => {
  const [slide, setSlide] = useState(0);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {banner.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[35rem] relative flex items-center justify-center">
            <Link href={`/shop/${item.category}`}>
              <Image
                src={storageUrl + item.image}
                layout="fill"
                objectFit="cover"
                alt={`Banner for ${item.category}`}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousal;



// "use client";
// import React, { useState } from "react";
// import image1 from "../../../public/Image/shop1.jpg";
// import image2 from "../../../public/Image/shop2.jpg";
// import image3 from "../../../public/Image/shop3.jpg";
// import Image from "next/image";
// import { storageUrl } from "@/utils/baseUrl";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import { Navigation } from "swiper";

// // const Data = [
// //   {
// //     image: image1,
// //     text: {
// //       subHeading: "SUMMER 2020",
// //       heading: "30% Discount",
// //       description:
// //         "We know how large objects will act,but things on a small scale",
// //     },
// //   },
// //   {
// //     image: image2,
// //     text: {
// //       subHeading: "SUMMER 2020",
// //       heading: "NEW COLLECTION",
// //       description:
// //         "We know how large objects will act,but things on a small scale",
// //     },
// //   },
// //   {
// //     image: image3,
// //     text: {
// //       subHeading: "SUMMER 2020",
// //       heading: "EXPLORE",
// //       description:
// //         "We know how large objects will act,but things on a small scale",
// //     },
// //   },
// // ];

// type TProps = {
//   banner: [
//     {
//       image: "";
//       category: "";
//     }
//   ];
// };

// const Carousal = ({ banner }: TProps) => {
//   const [slide, setSlide] = useState(0);

//   function buttonClickAdd() {
//     if (slide == banner.length - 1) {
//       setSlide(0);
//     } else {
//       setSlide(slide + 1);
//     }
//   }
//   function buttonClickMin() {
//     if (slide == 0) {
//       setSlide(banner.length - 1);
//     } else {
//       setSlide(slide - 1);
//     }
//   }

//   function imageClick() {}
//   return (
//     <>
//       {/* <div className="w-full h-[35rem] relative">
//         <Link href={"/shop/" + banner.at(slide)!.category}>
//           <Image
//             className="object-cover"
//             src={storageUrl + banner.at(slide)!.image}
//             fill
//             alt="Shopping_Page "
//           />
//         </Link>
//       </div> */}
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="flex items-center justify-center h-64 bg-green-500 text-white">
//             Slide 1
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex items-center justify-center h-64 bg-gray-500 text-white">
//             Slide 2
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex items-center justify-center h-64 bg-purple-500 text-white">
//             Slide 3
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default Carousal;
