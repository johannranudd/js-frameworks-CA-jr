"use client";
import React, { useEffect } from "react";
import { useCartContext } from "../../context/cartContext";

export default function ListComponent() {
  const { products, removeProduct, posts, setPosts } = useCartContext();

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

  function createNewPost() {
    console.log("create new post");
    const subObj = {
      id: Date.now(),
      title: `title number ${Date.now()}`,
      body: `body number ${Date.now()}`,
    };
    console.log(subObj);
    setPosts([...posts, subObj]);
  }

  useEffect(() => {
    console.log("POSTS::::", posts);
  }, [posts]);

  return (
    <>
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
      <button onClick={createNewPost}>create post</button>
    </>
  );
}
