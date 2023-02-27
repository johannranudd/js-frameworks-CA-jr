"use client";
import { useEffect, useState } from "react";
import { useCartContext } from "@/context/cartContext";

// interface IData {
//   id: string;
//   title: string;
//   price: number;
//   description;
//   discountedPrice;
//   imageUrl;
//   rating;
//   reviews;
//   tags;
// }

export default function ListComponent() {
  const [data, setData] = useState<Array<IData>>([]);
  const { state, dispatch } = useCartContext();
  const { products }: any = state;

  async function fetchData() {
    const res = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await res.json();
    setData(data);
    // console.log(data);
  }

  useEffect(() => {
    fetchData();
    // setData(res);
  }, []);

  useEffect(() => {
    // console.log(products);
  }, [state]);
  return (
    <div>
      <h3>List Component</h3>
      <ul>
        {data &&
          data.map((item) => {
            console.log(item);
            const {
              id,
              title,
              price,
              description,
              discountedPrice,
              imageUrl,
              rating,
              reviews,
              tags,
            } = item;
            return (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

{
  /* <button
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
      </button> */
}
