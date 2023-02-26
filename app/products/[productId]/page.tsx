import React from "react";
// import { numberFunction } from "@/app/components/ui/numberFunction";
// import { useCartContext } from "@/context/cartContext";
interface IParams {
  params: {
    productId: string;
    searchParams: {};
  };
}
export default async function ProductDetailPage({
  params: { productId },
}: IParams) {
  // console.log(props);
  // console.log(params);
  console.log(productId);
  // fetch with productId to get detailed product
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <p>
        displaying product: <strong>{productId}</strong>
      </p>
    </div>
  );
}
