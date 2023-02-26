import Link from "next/link";
import React from "react";
import MyForm from "../components/forms/MyForm";

export default function ProductPage() {
  const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1>Product page</h1>
      <MyForm />
      <ul>
        {array.map((item) => {
          //   console.log(item);
          return (
            <li key={item}>
              <Link href={`./products/${item}`}>item: {item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// function ListItem(){

// }
