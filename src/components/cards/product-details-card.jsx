import React from "react";

export default function ProductDetailCard({
  image,
  title,
  desc,
  price,
  discountPercentage,
  stock,
  brand,
  warrantyInformation
}) {
  const afterDiscountPrice = (price * (100 - discountPercentage)) / 100;
  return (
    <>
      <div
        href="#"
        className="relative flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-[500px] md:rounded-none md:rounded-s-lg"
          src={image}
          alt={title}
        />
        <p className="absolute top-5 left-5 bg-red-600 text-white py-2 px-1.5 rounded-md">
          {discountPercentage}% off
        </p>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-[20px] font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <div>
            <p className="text-2xl text-slate-500 font-bold line-through">
              ${price}
            </p>
            <p className="text-2xl text-slate-500 font-bold ">
              ${afterDiscountPrice}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-blue-900">{warrantyInformation}</p>
            <p className="text-blue-900  py-2 px-1.5 rounded-sm">
              Brand: <span className="font-bold">{brand}</span>
            </p>
          </div>
          <p>{stock}</p>
          <button className="bg-blue-700 py-2.5 text-white rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
