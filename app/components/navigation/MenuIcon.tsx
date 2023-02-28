"use client";
import React from "react";
import { useCartContext } from "@/context/cartContext";

export default function MenuIcon() {
  const { menuIsOpen, setMenuIsOpen } = useCartContext();

  function handleClick() {
    if (!menuIsOpen) {
      setMenuIsOpen(!menuIsOpen);
    } else {
      setMenuIsOpen(!menuIsOpen);
    }
  }

  return (
    <div onClick={handleClick} className="cursor-pointer mr-2 space-y-1.5">
      <div
        className={`w-8 h-[3px] bg-black duration-300 rounded-md ${
          menuIsOpen && "rotate-45 translate-y-[9px]"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px] bg-black duration-300 rounded-md ${
          menuIsOpen && "bg-transparent"
        }`}
      ></div>
      <div
        className={`w-8 h-[3px] bg-black duration-300 rounded-md ${
          menuIsOpen && "-rotate-45 translate-y-[-9px]"
        }`}
      ></div>
    </div>
  );
}
