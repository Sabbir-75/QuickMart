// app/components/Hero.tsx
import React from "react";
import Link from "next/link";
import CommonButton from "../Button/Button";

const Hero = () => {
    return (
        <section className="bg-[url('/images/How-to-Safely-Enjoy-Online-Shopping.jpg')] bg-no-repeat bg-cover bg-center text-primary min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 py-24">

                <div className="max-w-[400px] space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Welcome to Quickmart
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Your one-stop online marketplace to discover and shop amazing products quickly.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        <Link href={"/products"}>
                            <CommonButton>Browse Products</CommonButton>
                        </Link>
                        <Link href={"/products"}>
                            <CommonButton>Register</CommonButton>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
