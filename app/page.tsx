"use client";
import BtnColorMode from "../components/ui/btnColorMode";
import { useProductContext } from "@/context/productProvider";
import { useRef, useEffect } from "react";

export default function Home() {
  const { products, addProduct } = useProductContext();
  const productNameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    // type ProductNameType = string;
    const productName: undefined | string = productNameRef.current?.value;
    // console.log(productName);
    const price: 0 | number = Number(priceRef.current?.value);
    // console.log(price);
    const id: number = Date.now();
    // console.log(id);
    const prodObj = {
      name: productName ? productName : "",
      price: price,
    };
    // console.log(prodObj);
    // if (productName, )
    addProduct(prodObj);
    // console.log("products::::", products);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main>
      <h1>Home</h1>
      <BtnColorMode />
      <h3>list:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">product name</label>
        <input
          ref={productNameRef}
          type="text"
          name="product-name"
          id="product-name"
          className="border"
        />
        <label htmlFor="price">price</label>
        <input
          ref={priceRef}
          type="number"
          name="price"
          id="price"
          className="border"
        />
        <button type="submit">submit</button>
      </form>
      <ul className="border border-2 border-pink-700 p-2">
        {products.map((product) => {
          const { id, name, price } = product;
          return (
            <li key={id}>
              {name} ----- {price}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
