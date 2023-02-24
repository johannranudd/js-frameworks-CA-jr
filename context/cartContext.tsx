"use client";
import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface Product {
  id?: number;
  productName: string;
  price: number;
}

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface CartContextInterface {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (products: Product[]) => void;
  posts: IPost[];
  setPosts: Dispatch<SetStateAction<IPost[]>>;
}

export const CartContext = createContext<CartContextInterface>({
  products: [],
  addProduct(product) {},
  removeProduct(products) {},
  posts: [],
  setPosts: (): IPost[] => [],
});

interface IProps {
  children: ReactNode;
}

export function CartProvider({ children }: IProps) {
  // !test
  const [posts, setPosts] = useState<[] | IPost[]>([]);
  // !test
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    product.id = Number(Date.now());
    setProducts([...products, product]);
  };
  const removeProduct = (products: Product[]) => {
    setProducts(products);
    console.log("the new product list is:", products);
  };
  return (
    <CartContext.Provider
      value={{ products, addProduct, removeProduct, posts, setPosts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
