// "use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav className="border border-2 border-pink-400 space-x-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/products/134234"}>Products/134234</Link>
        <Link href={"/cart"}>Cart</Link>
        <Link href={"/checkout"}>Checkout</Link>
      </nav>
    </header>
  );
}
