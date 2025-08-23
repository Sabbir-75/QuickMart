import React from 'react';
import Hero from './Components/Hero/hero';
import Container from './Components/Container/Container';

const page = () => {
    const products = [
        { "title": "Tablet", "productName": "iPad 10th Gen", "brand": "Apple", "price": 55000, "image": "https://store.storeimages.cdn-apple.com/ipad-10th-gen.jpg" },
        { "title": "TV", "productName": "Bravia 43 Inch", "brand": "Sony", "price": 48000, "image": "https://www.sony-asia.com/image/bravia-43.jpg" },
        { "title": "Refrigerator", "productName": "Double Door 310L", "brand": "LG", "price": 39000, "image": "https://www.lg.com/lg-refrigerator-310l.jpg" },
        { "title": "Washing Machine", "productName": "Front Load 7kg", "brand": "Samsung", "price": 36000, "image": "https://images.samsung.com/is/image/samsung/washing-machine-7kg.jpg" },
        { "title": "AC", "productName": "Inverter 1.5 Ton", "brand": "Gree", "price": 52000, "image": "https://static.gree.com/ac-inverter-1.5ton.jpg" },
        { "title": "Microwave Oven", "productName": "23L Solo", "brand": "Panasonic", "price": 8500, "image": "https://panasonic.com.bd/microwave-23l.jpg" },
        { "title": "Blender", "productName": "Nutri Blender", "brand": "Philips", "price": 4500, "image": "https://philips.com.bd/blender.jpg" },
        { "title": "Shoes", "productName": "Air Zoom Pegasus", "brand": "Nike", "price": 9500, "image": "https://static.nike.com/air-zoom-pegasus.jpg" }
    ]
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