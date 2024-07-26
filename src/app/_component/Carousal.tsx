"use client";
import React, { useState } from "react";
import image1 from "../../../public/Image/shop1.jpg";
import image2 from "../../../public/Image/shop2.jpg";
import image3 from "../../../public/Image/shop3.jpg";
import Image from "next/image";

const Data = [
  {
    image: image1,
    text: {
      subHeading: "SUMMER 2020",
      heading: "30% Discount",
      discreption:
        "We know how large objects will act,but things on a small scale",
    },
  },
  {
    image: image2,
    text: {
      subHeading: "SUMMER 2020",
      heading: "NEW COLLECTION",
      discreption:
        "We know how large objects will act,but things on a small scale",
    },
  },
  {
    image: image3,
    text: {
      subHeading: "SUMMER 2020",
      heading: "EXPLORE",
      discreption:
        "We know how large objects will act,but things on a small scale",
    },
  },
];

const Carousal = () => {
  const [slide, setSlide] = useState(0);

  function buttonClickAdd() {
    if (slide == Data.length-1) {

      
      setSlide(0);
    } else {
      setSlide(slide+1);

    }
  }  function buttonClickMin() {
    if (slide == 0) {
       
      
      setSlide(Data.length-1);
    } else {
      setSlide(slide-1);

    }
  }
  return (
    <>
      <div className="w-full h-[25rem] relative">
        <Image
          className="object-cover"
          src={Data.at(slide)!.image}
          fill
          alt="Shoping_Page "
        />
        <div className="absolute top-40 left-24">
          <p className="text-global-font-text3 text-white ">
            {Data.at(slide)!.text.subHeading}
          </p>
          <p className="text-global-font-h1 text-white ">
            {Data.at(slide)!.text.heading}
          </p>
          <p className="text-global-font-text1 text-white ">
            {Data.at(slide)!.text.discreption}
          </p>
        </div>
        <button
          className="border-none absolute text-white top-[200px] right-4 hover:text-2xl"
          onClick={buttonClickAdd }
        >
          {">"}
        </button>
        <button
          className="border-none absolute text-white top-[200px] left-4 hover:text-2xl"
          onClick={buttonClickMin}
        >
          {"<"}
        </button>
      </div>
    </>
  );
};

export default Carousal;
