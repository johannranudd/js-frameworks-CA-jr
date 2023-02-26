import React from "react";
import { TProduct } from "@/types/types";

interface IState {
  products: TProduct[];
}

export const initialState: IState = {
  products: [],
};

export function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD":
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
