"use client"
import React, { useEffect, useState } from 'react';
import Hero from './Components/Hero/hero';
import Container from './Components/Container/Container';
import axios from 'axios';
import Link from 'next/link';
import SimpleDropdown from './Components/Dropdown/Dropdown';

const page = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://quick-mart-server-delta.vercel.app/products/newest")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <Hero></Hero>
            <Container>
                <h2 className="text-5xl text-center text-primary font-bold mb-8">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="border rounded-2xl p-4 shadow hover:shadow-lg bg-primary/15 transition"
                        >
                            <img
                                src={product.image}
                                alt={product.productName}
                                className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="font-medium">Product: {product.productName}</p>
                            <p className="font-medium">Description: {product.description}</p>
                            <p className="font-medium">Brand: {product.brand}</p>
                            <p className="text-green-600 font-bold">{product.price} Tk</p>

                            <Link href={`/services/${product._id}`}>
                                <button className="mt-3 w-full bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/90">
                                    Details
                                </button>
                            </Link>

                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default page;