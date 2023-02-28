import Link from "next/link";
import Image from "next/image";
// import MyImage from "@/images/stash-logo-transparent";

export default function NavBar() {
  return (
    <header>
      <nav className="">
        <div className="relative">
          <Image
            src={"/public/images/stash-logo-transparent.png"}
            alt="logo"
            // fill={true}
            width={500}
            height={500}
            // className="object-cover"
          />
        </div>
        <Link href={"/"}>Home</Link>
        <Link href={"/cart"}>Cart</Link>
        <Link href={"/checkout"}>Checkout</Link>
      </nav>
    </header>
  );
}
