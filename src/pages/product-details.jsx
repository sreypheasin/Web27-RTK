import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  selectSingleProduct
} from "../features/product/productSlice";
import { useParams } from "react-router";
import ProductDetailCard from "../components/cards/product-details-card";

export default function ProductDetails() {
  const product = useSelector(selectSingleProduct);
  const param = useParams();
  const dispatch = useDispatch();
  console.log("param", param);
  useEffect(() => {
    dispatch(fetchSingleProduct(param.id));
  }, []);
  console.log("product", product);
  return (
    <section className="max-w-screen-xl mx-auto flex justify-center">
      <ProductDetailCard
        title={product.title}
        desc={product.description}
        price={product.price}
        image={product.images}
        discountPercentage={product.discountPercentage}
        brand={product.brand}
        warrantyInformation={product.warrantyInformation}
      />
    </section>
  );
}
