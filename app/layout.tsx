import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import Link from "next/link";
import { CartProvider } from "../context/cartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <CartProvider>
          <ColorThemeProvider>
            <header className="border border-2 border-pink-400 space-x-3">
              <Link href={"./"}>Home</Link>
              <Link href={"./products"}>Products</Link>
            </header>
            {children}
          </ColorThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
