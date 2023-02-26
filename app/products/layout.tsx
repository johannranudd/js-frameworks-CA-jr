import ProductDetailPage from "./[productId]/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-500">
      <div>Im a layout</div>
      <div>{children}</div>
    </main>
  );
}
