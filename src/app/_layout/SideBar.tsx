import React from 'react'
import Link from "next/link";

const home = [
    { name: "Home", Link: "/" },
    { name: "Shop", Link: "/Shop" },
    { name: "Contact", Link: "/Contact" },
    { name: "Login", Link: "/Login" },
  ];
const SideBar = () => {
  return (
    <>
    <div className='bg-teal-400 h-[100vh] w-[200px] fixed right-0 z-10'>
    {home.map((item, index) => (
              <div className='flex ' key={index}><Link className="flex row-span-2 justify-center mt-5" href={item.Link}>
                {item.name}
              </Link></div>
            ))}

    </div>
    </>

  )
}

export default SideBar