import React from "react";

type TProps = {
  text?: string;
  className?:string
  type?:"submit" | "reset" | "button";
  onClick?:React.MouseEventHandler<HTMLButtonElement>
};

const PrimaryButton = (props: TProps) => {
  return (
    <>
      <button className={props.className} type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default PrimaryButton;
