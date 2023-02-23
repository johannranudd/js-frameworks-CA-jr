"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ProductDataType = {
  productName: string;
  price: number;
};

interface ContextProps {
  product: ProductDataType;
  setProduct: Dispatch<SetStateAction<ProductDataType>>;

  //   productName: string;
  //   setProductName: Dispatch<SetStateAction<string>>;
  data: ProductDataType[];
  setData: Dispatch<SetStateAction<ProductDataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  product: {},
  setProductName: (): string => "",
  data: [],
  setData: (): ProductDataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [data, setData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
