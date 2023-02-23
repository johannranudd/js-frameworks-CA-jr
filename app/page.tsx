import BtnColorMode from "../components/ui/btnColorMode";
// import { useCartContext } from "../context/cartContext";
import ListComponent from "../components/lists/listComponent";

export default function Home() {
  // const { products } = useCartContext();

  return (
    <main>
      <h1>Home</h1>
      <BtnColorMode />
      <h3>list:</h3>
      <ListComponent />
    </main>
  );
}
