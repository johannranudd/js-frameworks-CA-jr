"use client";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  // comment
  return (
    <header className="border border-2 border-pink-400 space-x-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/about"}>About</Link>
    </header>
  );
}
