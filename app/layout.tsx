import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import { ContextProvider } from "../context/context";
import TestBar from "./components/navigation/TestBar";

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
            <TestBar />
            {children}
          </ColorThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
