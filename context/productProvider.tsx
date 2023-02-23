"use client";
// import { Product } from "../interfaces/products";
import React, { ReactNode, useState, createContext, useContext } from "react";
// import { ProductContext } from "./productContext";
// import { Product } from "../interfaces/products";
// import { createContext, useContext } from "react";

interface Product {
  id?: number;
  name: string;
  price: number;
}

interface IProductContext {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  addProduct(product) {},
});

interface IProps {
  children: ReactNode;
}

export function ProductProvider({ children }: IProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    product.id = products.length;
    setProducts([...products, product]);
  };
  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
