"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import axios from "axios";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://quick-mart-server-delta.vercel.app/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="text-center mt-20">No product found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-3xl w-full shadow-2xl rounded-2xl overflow-hidden bg-primary/10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="flex items-center justify-center bg-primary/10 p-6">
            <img
              src={product.image}
              alt={product.productName}
              className="rounded-xl object-contain max-h-80"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-200">{product.brand}</p>
              <p className="text-sm text-gray-700 dark:text-gray-200">{product.description}</p>
            </div>

            <p className="text-3xl font-semibold text-green-600">
               {product.price} Tk
            </p>


            {/* Features */}
            <div className="text-black dark:text-white">
              <h3 className="font-semibold mb-2">Features:</h3>
              <div className="space-y-2">
                <p>
                <span className="font-medium">Ram:</span>{" "}
                {product.specs.ram}
              </p>
                <p>
                <span className="font-medium">Storage:</span>{" "}
                {product.specs.storage}
              </p>
                <p>
                <span className="font-medium">Processor:</span>{" "}
                {product.specs.processor}
              </p>
                <p>
                <span className="font-medium">Warranty:</span>{" "}
                {product.specs.warranty}
              </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl shadow">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-xl shadow">
                <Heart size={18} /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
