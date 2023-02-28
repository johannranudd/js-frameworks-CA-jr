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
