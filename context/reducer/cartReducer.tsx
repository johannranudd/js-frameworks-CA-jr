import React from "react";

interface TState {
  products: Object[];
}

export const initialState: TState = {
  products: [],
};

// { id: "IDstring", name: "Namestring", price: 123234213 }

export function reducer(state: TState, action: any) {
  switch (action.type) {
    case "ADD":
      console.log("action.payload:::", action.payload);
      console.log("state.products:::", state.products);
      const newProductArray = [...state.products, action.payload];
      console.log(newProductArray);
      return {
        ...state,
        products: newProductArray,
      };
    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}
