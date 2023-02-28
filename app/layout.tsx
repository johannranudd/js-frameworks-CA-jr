import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import { CartProvider } from "../context/cartContext";
import NavBar from "./components/navigation/navbar";

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
            <NavBar />
            {children}
          </ColorThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
