"use client";
import React from "react";

export default function Page() {
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("sub");
  }
  return (
    <div>
      <h1>Add Products:</h1>
      <form onSubmit={handleSubmit} className="flex flex-col my-4">
        <label htmlFor="product-name">Product name</label>
        <input
          type="text"
          //   onChange={}
          name="product-name"
          id="product-name"
          className="border"
        />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" className="border" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
