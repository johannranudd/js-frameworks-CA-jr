// context
export type TProduct = {
  id: string;
  name: string;
  price: number;
};

export interface IState {
  products: TProduct[];
}

export interface ContextInterface {
  cartState: Object<IState>;
  dispatch: Dispatch<any>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}
// end context

// for fetching data from https://api.noroff.dev/api/v1/online-shop
interface IDataObject {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: Array<string>;
  reviews: Array<string>;
}
