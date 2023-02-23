"use client";
import React from "react";
import { useProductContext } from "../../context/productProvider";

export default function Page() {
  const { products } = useProductContext();

  return (
    <div>
      <h1>List of Products from context:</h1>
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
    </div>
  );
}
