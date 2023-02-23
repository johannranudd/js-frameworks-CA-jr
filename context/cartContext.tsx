"use client";
import React, { ReactNode, useState, createContext, useContext } from "react";

interface Product {
  id?: number;
  productName: string;
  price: number;
}

interface CartContextInterface {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const CartContext = createContext<CartContextInterface>({
  products: [],
  addProduct(product) {},
  removeProduct(product) {},
});

interface IProps {
  children: ReactNode;
}

export function CartProvider({ children }: IProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    product.id = Number(Date.now());
    setProducts([...products, product]);
  };
  const removeProduct = (product: Product) => {
    console.log("this product was removed:::", product);
  };
  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
