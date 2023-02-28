import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import { ContextProvider } from "../context/context";
import Navbar from "./components/navigation/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <ContextProvider>
          <ColorThemeProvider>
            <Navbar />
            {children}
          </ColorThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
