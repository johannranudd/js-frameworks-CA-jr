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
  removeProduct: (products: Product[]) => void;
}

export const CartContext = createContext<CartContextInterface>({
  products: [],
  addProduct(product) {},
  removeProduct(products) {},
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
  const removeProduct = (products: Product[]) => {
    // console.log(products);
    setProducts(products);
    console.log("the new product list is:", products);
  };
  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
