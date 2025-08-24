"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const productData = {
        title: data.title,
        productName: data.productName,
        description: data.description,
        brand: data.brand,
        price: Number(data.price),
        image: data.image,
        specs: {
          ram: data.ram,
          storage: data.storage,
          processor: data.processor,
          warranty: data.warranty,
        },
      };

      const res = await fetch("https://quick-mart-server-delta.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        alert("✅ Product added successfully!");
        reset();
      } else {
        alert("❌ Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white mb-6 dark:bg-gray-900 shadow-lg rounded-xl">
      <h2 className="text-4xl text-center font-bold mb-4">Add <span className="text-primary
      "> New </span> Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Main fields */}
        <input {...register("title")} placeholder="Title" className="w-full p-2 border rounded" />
        <input {...register("productName")} placeholder="Product Name" className="w-full p-2 border rounded" />
        <input {...register("description")} placeholder="Description" className="w-full p-2 border rounded" />
        <input {...register("brand")} placeholder="Brand" className="w-full p-2 border rounded" />
        <input {...register("price")} placeholder="Price" className="w-full p-2 border rounded" />
        <input {...register("image")} placeholder="Image URL" className="w-full p-2 border rounded" />

        {/* Specs */}
        <h3 className="font-semibold mt-4">Specs</h3>
        <input {...register("ram")} placeholder="RAM" className="w-full p-2 border rounded" />
        <input {...register("storage")} placeholder="Storage" className="w-full p-2 border rounded" />
        <input {...register("processor")} placeholder="Processor" className="w-full p-2 border rounded" />
        <input {...register("warranty")} placeholder="Warranty" className="w-full p-2 border rounded" />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
