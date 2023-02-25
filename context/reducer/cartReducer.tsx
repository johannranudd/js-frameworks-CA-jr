import React from "react";
import { TProduct } from "../cartContext";

interface IState {
  products: TProduct[];
}

export const initialState: IState = {
  products: [],
};

// { id: "IDstring", name: "Namestring", price: 123234213 }

export function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD":
      //   console.log("action.payload:::", action.payload);
      //   console.log("state.products:::", state.products);
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}
