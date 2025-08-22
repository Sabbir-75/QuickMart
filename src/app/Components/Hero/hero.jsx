// app/components/Hero.tsx
import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-green-200 text-primary">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Welcome to Quickmart
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Your one-stop online marketplace to discover and shop amazing products quickly.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        <Link href="/products">
                            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-50 transition">
                                Browse Products
                            </button>
                        </Link>
                        <Link href="/login">
                            <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                    <img
                        src="/hero-product.png" // replace with your product/illustration image
                        alt="Quickmart Products"
                        className="w-full max-w-md rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
