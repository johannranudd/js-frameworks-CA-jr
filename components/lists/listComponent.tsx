"use client";
import { useEffect } from "react";
import { useCartContext } from "@/context/cartContext";

export default function ListComponent() {
  const { state, dispatch } = useCartContext();

  // console.log(state);
  useEffect(() => {
    console.log("THIS IS STATE IN LIST COMPONENT::: ", state);
  }, [state]);
  return (
    <div>
      <h3>List Component</h3>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { id: "IDstring", name: "Namestring", price: 123234213 },
          })
        }
      >
        add something to state
      </button>
    </div>
  );
}
