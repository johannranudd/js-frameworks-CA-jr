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

type TProduct = {
  id: string;
  name: string;
  price: number;
};

// type CartState = {
//   products: TProduct[];
// };

interface CartContextInterface {
  //   products: TProduct[];
  state: Object;
  dispatch: Dispatch<any>;
  //   setProducts: Dispatch<SetStateAction<TProduct[]>>;
}

export const CartContext = createContext<CartContextInterface>({
  //   products: [],
  state: {},
  dispatch: (): TProduct[] => [],
});

interface IProps {
  children: ReactNode;
}

export function CartProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const cartContextValue = { state, dispatch };

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
