import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="bg-white relative block overflow-hidden rounded-lg animate-pulse">
      <div className="absolute end-4 top-4 z-10 rounded-full bg-gray-300 p-1.5 w-8 h-8"></div>

      <div className="h-64 w-full bg-gray-300 sm:h-72"></div>

      <div className="relative bg-white p-6">
        <div className="bg-gray-300 px-3 py-1.5 w-20 h-5 rounded-md"></div>

        <div className="mt-4 h-6 bg-gray-300 w-3/4 rounded-md"></div>
        <div className="mt-2 h-4 bg-gray-300 w-full rounded-md"></div>
        <div className="mt-1 h-4 bg-gray-300 w-5/6 rounded-md"></div>

        <div className="mt-4 h-6 bg-gray-300 w-1/4 rounded-md"></div>

        <div className="mt-4 h-10 bg-gray-300 w-full rounded-lg"></div>
      </div>
    </div>
  );
}
