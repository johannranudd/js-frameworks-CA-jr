import { handleClick } from "./test";

export default function Home() {
  return (
    <main>
      <h1 className="text-black dark:text-white">Home</h1>
      <button onClick={handleClick} className="bg-gray-500 rounded-md">
        Change color mode
      </button>
    </main>
  );
}
