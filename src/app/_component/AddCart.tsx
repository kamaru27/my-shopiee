'use client'
import PrimaryButton from '@/component/PrimaryButton'
import React from 'react'
import { useCart } from "@mrvautin/react-shoppingcart";
// type TData={
//     name:string,
//     _id:string,
//     price:number,
//     image:string
//     description:string,
//     brand:any
// }

type Props={
    Data:any
}

const AddCart = (props:Props) => {
// const AddCart = async ({ params }: { params: { singleProduct: string } }) => {
    const { addItem } = useCart();
    // const dummy = await fetch("https://dummyjson.com/products/" + params.singleProduct);
    // const Data = await dummy.json();


  return (
    <div>
        <PrimaryButton
              text="ADD TO CART"
              className="bg-globalblue  mt-[20px] w-full h-[40px] rounded-[10px] text-white hover:bg-white hover:text-globalblue hover:border-solid hover:border-2 hover:border-globalblue"
              type="submit"
              onClick={() =>
                addItem({
                  id: props.Data._id,
                  name: props.Data.name,
                  price: props.Data.price,
                  image: props.Data.image
                })
              }
            />
    </div>
  )
}

export default AddCart