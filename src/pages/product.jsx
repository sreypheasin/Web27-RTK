import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";
import {
  fetchAllProduct,
  selectAllProducts,
  selectStatus
} from "../features/product/productSlice";
import ProductCard from "../components/cards/product-card";
import ProductSkeleton from "../components/skeleton/product-skeleton";

export default function Product() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectStatus);
  const [searchInput, setSearchInput] = useState("");
  const [searchProducts, setSearchProduct] = useState([]);
  const dispatch = useDispatch();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log("products in product page", products);
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  console.log("search input", searchInput);
  // handle search input
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // handle search submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const searchProducts = await fetch(
      `${import.meta.env.VITE_BASE_URL}/products/search?q=${searchInput}`
    ).then((res) => res.json());
    setSearchProduct(searchProducts.products);
  };

  console.log("searchProducts", searchProducts);
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* search */}
      <form className="mb-5" onSubmit={(e) => handleSearchSubmit(e)}>
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoSearchSharp />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={(e) => handleSearchInput(e)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {/* product section */}
      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchProducts.length === 0 &&
          status === "Loading" &&
          skeleton.map((index) => <ProductSkeleton key={index} />)}
        {searchProducts.length === 0 && status === "Success"
          ? products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                desc={product.description}
                tag={product.tags[0]}
                id={product.id}
              />
            ))
          : searchProducts?.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                desc={product.description}
                tag={product.tags[0]}
                id={product.id}
              />
            ))}
      </section>
    </div>
  );
}
