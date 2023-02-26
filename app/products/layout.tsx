import List from "./List";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-500 ">
      <h1>Im a product layout</h1>
      <div className="flex">
        <List />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
