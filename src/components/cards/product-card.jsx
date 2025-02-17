import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router";

export default function ProductCard({ thumbnail, price, title, desc, tag,id }) {
  return (
    <div>
      <NavLink
        to={`/products/${id}`}
        className="group bg-white relative block overflow-hidden rounded-lg"
      >
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>
          <FaRegHeart />
        </button>
        <img
          src={
            thumbnail ||
            "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          }
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative bg-white p-6">
          <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
            {tag}
          </span>

          <h3 className="line-clamp-1 mt-4 text-lg font-medium text-gray-900">
            {title || "No title"}
          </h3>
          <p className="line-clamp-2">
            {desc ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quam."}
          </p>

          <p className="mt-1.5 text-lg font-bold text-gray-700">
            ${price || 0}
          </p>

          <form className="mt-4">
            <button className="rounded-lg block w-full text-white bg-blue-700 p-4 text-sm font-medium transition hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </NavLink>
    </div>
  );
}
