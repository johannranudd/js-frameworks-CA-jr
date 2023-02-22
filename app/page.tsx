"use client";
import BtnColorMode from "../components/ui/btnColorMode";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/cart";

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    console.log(userId);
    console.log(data);

    setUserId("john doe");
    setData([{ firstName: "tim" }, { firstName: "dim" }, { firstName: "lim" }]);
  }, []);
  return (
    <main>
      <h1>Home</h1>
      <BtnColorMode />
      <h3>in context</h3>
      <ul>
        {/* <li>{userId && userId}</li>
        <li>{data ? data : []}</li> */}
      </ul>
    </main>
  );
}
