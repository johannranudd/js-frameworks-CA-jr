import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/images/stash-logo-transparent.png";
import BtnColorMode from "../ui/btnColorMode";
import MenuIcon from "./MenuIcon";
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    <header className="relative max-w-screen-xl border-b border-black dark:border-white">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={LogoImage} alt="logo" width={80} />
        </Link>
        <BtnColorMode />
        <MenuIcon />
        <NavMenu />
      </nav>
    </header>
  );
}
