"use client";
import BtnColorMode from "../components/ui/btnColorMode";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/cart";

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    // console.log(userId);
    // console.log(data);
  }, []);
  // setUserId("john doe");
  // setData([{ firstName: "tim" }, { firstName: "dim" }, { firstName: "lim" }]);

  function handleSubmit(e) {
    e.preventDefault();
    if (userId) {
      setData((prev) => {
        const newArray = [...prev, { firstName: userId }];
        return newArray;
      });
    }
  }

  return (
    <main>
      <h1>Home</h1>
      <BtnColorMode />
      <h3>in context</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          className="border border-black dark:border-white"
        />
        <button type="submit">submit</button>
      </form>
      <UserNameList data={data} />
    </main>
  );
}

const UserNameList = (data: Object) => {
  const { newData: any } = data;
  console.log(newData);
  return (
    <ul>
      {/* {data &&
        data.map((user: Object) => {
          <li>user.firstName</li>;
        })} */}
    </ul>
  );
};
