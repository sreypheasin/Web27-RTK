import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../features/cart/cartSlice";
import {
  fetchAllProduct,
  selectAllProducts
} from "../features/product/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  
  console.log("products in product page", products);

  return (
    <div className="max-w-screen-xl mx-auto">
      <button
        onClick={() => dispatch(decrease())}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove
      </button>
      <button
        onClick={() => dispatch(increase())}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button>
    </div>
  );
}
