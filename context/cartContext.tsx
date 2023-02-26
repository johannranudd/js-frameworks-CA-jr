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
import { TProduct, CartContextInterface } from "@/types/types";

export const CartContext = createContext<CartContextInterface>({
  state: {},
  dispatch: (): TProduct[] => [],
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
