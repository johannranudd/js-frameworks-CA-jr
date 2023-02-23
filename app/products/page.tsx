"use client";
import React, { useEffect, useRef } from "react";
import { useCartContext } from "../../context/cartContext";

export default function Page() {
  const { products, addProduct } = useCartContext();
  const productNameRef = React.useRef<HTMLInputElement | null>(null);
  const priceRef = React.useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    const productName: undefined | string = productNameRef.current?.value;
    const price: 0 | number = Number(priceRef.current?.value);

    if (productName && price) {
      const prodObj = {
        productName: productName ? productName : "",
        price: price,
      };
      console.log(prodObj);
      addProduct(prodObj);
      //   productNameRef.current.value = "";
    }
    // if (productName, )
    // console.log("products::::", products);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div>
      <h1>List of Products from context:</h1>
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
    </div>
  );
}
