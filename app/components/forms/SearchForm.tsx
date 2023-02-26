"use client";
import React, { useState, useEffect } from "react";
import { searchFunction } from "../../../utils/searchFunction";
import { useRouter } from "next/navigation";

export default function MyForm() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(search);
    if (search) {
      // const t = searchFunction(Number(search));
      router.push(`/search/${search}`);
      setSearch("");
    }
  }

  useEffect(() => {
    // console.log(search);
  }, [search]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        value={search}
        name="search"
        className="border border-2 border-pink-600"
      />
      <button type="submit">submit</button>
    </form>
  );
}
