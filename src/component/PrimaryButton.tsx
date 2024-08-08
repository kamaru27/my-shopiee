import React from "react";

type TProps = {
  text: string;
  className?:string
};

const Button = (props: TProps) => {
  return (
    <>
      <button className="bg-globalblue  mt-[20px] px-[105px] h-[40px] rounded-[10px] text-white">
        {props.text}
      </button>
    </>
  );
};

export default Button;
