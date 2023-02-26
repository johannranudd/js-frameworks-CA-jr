"use client";
import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useReducer,
} from "react";
import { reducer, initialState } from "./reducer/cartReducer";
import { numberFunction } from "@/app/components/ui/numberFunction";

export type TProduct = {
  id: string;
  name: string;
  price: number;
};

interface CartContextInterface {
  state: Object;
  dispatch: Dispatch<any>;
  // testingFFS: string;
}

export const CartContext = createContext<CartContextInterface>({
  state: {},
  dispatch: (): TProduct[] => [],
  // testingFFS: "",
});

interface IProps {
  children: ReactNode;
}

export function CartProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const testingFFS = numberFunction();
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
