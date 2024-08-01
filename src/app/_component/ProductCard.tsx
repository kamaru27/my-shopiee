import Image, { StaticImageData } from 'next/image'
import React from 'react'

type PProps = {
    image:StaticImageData,
    text:string,
    discription:string,
    Rate:number
}

const ProductCard = (props:PProps) => {
  return (
    <>
        <Image src={props.image} alt=""></Image>
    </>
  )
}

export default ProductCard