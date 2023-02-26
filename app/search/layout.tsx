import SearchForm from "../components/forms/SearchForm";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-500">
      <div>Im a search layout</div>
      <SearchForm />
      <div>{children}</div>
    </div>
  );
}
