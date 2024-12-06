"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import { storageUrl } from "@/utils/baseUrl";

const CartItems = () => {
  const { items, removeItem, updateItemQuantity } = useCart();
  const [client, setClient] = useState(false);
  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }
  return (
    <>
      {items.map((item, i) => (
        <tr key={i}>
          <td className="flex justify-center h-full">
            <div className="flex items-center ">
              <Image
                src={storageUrl + item.image}
                alt={item.name}
                className="size-20"
                width={80}
                height={80}
              />
              <p>{item.name}</p>
            </div>
          </td>
          <td className="text-center">{item.price.toFixed(2)}</td>
          <td>
            <div className="flex justify-center gap-1 text-center items-center">
              <button onClick={() => updateItemQuantity(item, "decrease", 1)}>
                -
              </button>
              <div className="size-6 border border-solid text-sm">
                {item.quantity}
              </div>
              <button onClick={() => updateItemQuantity(item, "increase", 1)}>
                +
              </button>
            </div>
          </td>
          <td className="text-center">
            {item.quantity
              ? (item.price * item.quantity).toFixed(2)
              : item.price.toFixed(2)}
          </td>
          <td>
            <button
              className="border-[0px] text-xs text-globalblue text-center hover:text-black"
              onClick={() => removeItem(item)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartItems;
