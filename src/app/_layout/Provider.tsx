"use client";
import React, { ReactNode } from "react";
import { CartProvider } from "@mrvautin/react-shoppingcart";

type PProps = {
  children: ReactNode;
};

const Provider = ({children}:PProps) => {
  return (
    <CartProvider>{children}</CartProvider>
  );
};

export default Provider;
