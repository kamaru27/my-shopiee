import Link from "next/link";
import React from "react";
import WhatsappIcon from "../_svg/Whatsapp";
import InstagramIcon from "../_svg/Instagram";
import FacebookIcon from "../_svg/Facebook";

const footer = [
  { name: "Login", Link: "/Login" },
  { name: "Contact", Link: "/Contact" },
  { name: "Shop", Link: "/Shop" },
];

const Footer = () => {
  return (
    <>
      <div className="bg-slate-300 w-[100vw] sm:h-60 sm:grid grid-cols-3">
        <p className="text-center pr-4 mb-[35px] font-bold pt-12 text-xl">
          My-Shopiee
        </p>

        <div className="col-span-1 text-center mt-10">
          <div className="font-bold">Links</div>
          <div className="flex justify-center gap-[15px] mt-3 font-semibold text-gray-500">
            {footer.map((item, index) => (
              <Link key={index} className="" href={item.Link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center  sm:block sm:ml-[60px] col-span-1 mt-10 pb-5 sm:pb-0">
          <div className="font-bold">Get In Touch</div>
          <div className="">Payyanur (via),Kannur District</div>
          <div className="flex gap-5 mt-2">
            <WhatsappIcon className="size-[40px]" />
            <InstagramIcon className="size-[40px]" />
            <FacebookIcon className="size-[40px]" />
          </div>
        </div>
      </div>
      <div className="border-t border-black text-center py-3">
        <p>@copyright</p>
      </div>
    </>
  );
};

export default Footer;
