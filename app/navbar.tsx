import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav className="border border-2 border-pink-400 space-x-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/about"}>About</Link>
      </nav>
    </header>
  );
}
