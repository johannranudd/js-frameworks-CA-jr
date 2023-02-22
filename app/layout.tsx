import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import { GlobalContextProvider } from "../context/cart";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <GlobalContextProvider>
          <ColorThemeProvider>{children}</ColorThemeProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
