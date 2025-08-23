"use client"
import React, { useEffect, useState } from 'react';
import Hero from './Components/Hero/hero';
import Container from './Components/Container/Container';
import axios from 'axios';

const page = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products/newest")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <Hero></Hero>
            <Container>
                <h2 className="text-2xl font-bold mb-4">All Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
                        >
                            <img
                                src={product.image}
                                alt={product.productName}
                                className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="text-gray-700">Product: {product.productName}</p>
                            <p className="text-gray-500">Brand: {product.brand}</p>
                            <p className="text-green-600 font-bold">{product.price} ৳</p>
                            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default page;