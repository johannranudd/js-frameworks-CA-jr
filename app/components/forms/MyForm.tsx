"use client";
import React, { useState, useEffect } from "react";
import { testFunction } from "../ui/testFunction";

export default function MyForm() {
  const [name, setName] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
    // console.log(name);
    if (name) {
      const t = testFunction(Number(name));
      console.log(t);
    }
  }

  useEffect(() => {
    // console.log(name);
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        name={name}
        className="border border-2 border-pink-600"
      />
      <button type="submit">submit</button>
    </form>
  );
}
