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
      description:
        "We know how large objects will act,but things on a small scale",
    },
  },
  {
    image: image2,
    text: {
      subHeading: "SUMMER 2020",
      heading: "NEW COLLECTION",
      description:
        "We know how large objects will act,but things on a small scale",
    },
  },
  {
    image: image3,
    text: {
      subHeading: "SUMMER 2020",
      heading: "EXPLORE",
      description:
        "We know how large objects will act,but things on a small scale",
    },
  },
];

const Carousal = () => {
  const [slide, setSlide] = useState(0);

  function buttonClickAdd() {
    if (slide == Data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }
  function buttonClickMin() {
    if (slide == 0) {
      setSlide(Data.length - 1);
    } else {
      setSlide(slide - 1);
    }
  }
  return (
    <>
      <div className="w-full h-[35rem] relative">
        <Image
          className="object-cover"
          src={Data.at(slide)!.image}
          fill
          alt="Shoping_Page "
        />
        <div className="absolute top-[45%] sm:left-24 left-[10%] flex-col sm:block">
          <p className="text-global-font-text3 text-white ">
            {Data.at(slide)!.text.subHeading}
          </p>
          <p className="sm:text-global-font-h1 text-global-font-h3 text-white">
            {Data.at(slide)!.text.heading}
          </p>
          <p className="sm:text-global-font-text1 text-[10px] text-white truncate overflow-hidden">
            {Data.at(slide)!.text.description}
          </p>
        </div>
        <button
          className="border-none absolute text-white top-[50%] right-4 hover:text-2xl"
          onClick={buttonClickAdd}
        >
          {">"}
        </button>
        <button
          className="border-none absolute text-white top-[50%] left-4 hover:text-2xl"
          onClick={buttonClickMin}
        >
          {"<"}
        </button>
      </div>
    </>
  );
};

export default Carousal;
