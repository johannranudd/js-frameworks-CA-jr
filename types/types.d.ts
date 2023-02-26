export type TProduct = {
  id: string;
  name: string;
  price: number;
};

export interface CartContextInterface {
  state: Object;
  dispatch: Dispatch<any>;
}
