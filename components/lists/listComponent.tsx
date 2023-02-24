"use client";
import React, { useEffect } from "react";
import { useCartContext } from "../../context/cartContext";

export default function ListComponent() {
  const { products, removeProduct } = useCartContext();

  function handleClick(id: string) {
    const numberAgain: number = Number(id);
    const filterProducts = products.filter((item) => {
      if (item.id !== numberAgain) {
        return item;
      }
    });
    // console.log(filterProducts);
    removeProduct(filterProducts);
    // console.log(e);
    // console.log(e.target);
    // console.log(Number(id));
  }

  // useEffect(() => {
  //   console.log("change in products");
  // }, [products]);

  return (
    <ul className="border border-2 border-pink-700 p-2">
      {products.map((product) => {
        const { id, productName, price } = product;
        return (
          <li key={id}>
            {productName} ----- {price}{" "}
            <button
              onClick={() => handleClick(id ? id.toString() : "")}
              className="border bg-gray-500 hover:opacity-80"
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
