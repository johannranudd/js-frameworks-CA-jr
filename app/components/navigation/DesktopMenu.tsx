import React from "react";
import Link from "next/link";
import { useGlobalContext } from "@/context/context";
export default function DesktopMenu() {
  //   const { menuIsOpen } = useGlobalContext();
  return (
    <div className="hidden md:inline space-x-2 ml-auto pr-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/checkout"}>Checkout</Link>
    </div>
  );
}
