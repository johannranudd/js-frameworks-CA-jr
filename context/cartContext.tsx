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
  cartState: {},
  dispatch: (): TProduct[] => [],
  menuIsOpen: false,
  setMenuIsOpen: () => false,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [cartState, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider
      value={{ cartState, dispatch, menuIsOpen, setMenuIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
