"use client";
import { useEffect } from "react";
import { useCartContext } from "@/context/cartContext";

export default function ListComponent() {
  const { state, dispatch } = useCartContext();
  const { products }: any = state;

  useEffect(() => {
    console.log(products);
  }, [state]);
  return (
    <div>
      <h3>List Component</h3>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: {
              id: crypto.randomUUID(),
              name: "Namestring",
              price: Math.floor(Math.random() * 100),
            },
          })
        }
      >
        add something to state
      </button>
    </div>
  );
}
