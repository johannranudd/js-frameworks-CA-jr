import React from "react";
import Link from "next/link";

export default function List() {
  const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
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
  );
}
