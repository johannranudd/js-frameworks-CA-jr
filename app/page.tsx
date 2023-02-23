"use client";
import BtnColorMode from "../components/ui/btnColorMode";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <BtnColorMode />
      <h3>list:</h3>
      <ul className="border border-2 border-pink-700 p-2"></ul>
    </main>
  );
}
