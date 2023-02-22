import "./globals.css";
import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="dark">
        <ColorThemeProvider>{children}</ColorThemeProvider>
      </body>
    </html>
  );
}
