"use client";
import React from "react";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";
export default function NavMenu() {
  const { cartState, dispatch, menuIsOpen } = useCartContext();
  return (
    <div
      className={`absolute flex flex-col bg-red-500 duration-300 ${
        menuIsOpen ? "top-0" : "-top-[200%]"
      }`}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/checkout"}>Checkout</Link>
    </div>
  );
}
