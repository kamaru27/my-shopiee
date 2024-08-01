import Image from "next/image";
import React from "react";
import backgroundImage from "@public/Image/shop3.jpg";
import LocationDotSolid from "../../svg/LocationDotSolid";
import PhoneSolid from "../../svg/PhoneSolid";
import EnvelopeSolid from "../../svg/EnvelopeSolid";

const page = () => {
  return (
    <>
      <div className="relative h-[650px] w-full">
        <Image
          src={backgroundImage}
          alt=""
          className="absolute object-cover"
          fill
        />
        <div className=" absolute text-4xl font-bold w-full top-[170px] text-white text-center">
          CONTACT US
        </div>
        <div>
          <div className=" absolute text-base font-medium w-full top-[250px] text-white text-center">
            Problems trying to resolve the conflict between the two major realms
            of classical physics:
          </div>
          <div className=" absolute text-base font-medium w-full top-[275px] text-white text-center">
            Newtonian mechanics resolve the conflict between the two major
            realms of classical physics:
          </div>
        </div>

        <div className="  absolute top-[350px] inset-x-0 flex justify-center">
          <div className="bg-white border-2 h-[110px] border-slate-500 text-center flex w-4/5 gap-10 px-10 items-center">
            <LocationDotSolid className="size-20" />
            <div className="w-full">
              <p>ADDRESS</p>
              <p>1908,19th Floor,Prism Tower,Business Bay</p>
            </div>
            <PhoneSolid className="size-20" />
            <div className="w-full">
              <p>CALL</p>
              <p>+971 56783222</p>
            </div>
            <EnvelopeSolid className="size-20" />
            <div className="w-full">
              <p>EMAIL</p>
              <p>thania@myshopiee.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
