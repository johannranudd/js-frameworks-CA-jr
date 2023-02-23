"use client";
import React from "react";
import { useCartContext } from "../../context/cartContext";

export default function ListComponent() {
  const { products } = useCartContext();

  return (
    <ul className="border border-2 border-pink-700 p-2">
      {products.map((product) => {
        const { id, productName, price } = product;
        return (
          <li key={id}>
            {productName} ----- {price}
          </li>
        );
      })}
    </ul>
  );
}
