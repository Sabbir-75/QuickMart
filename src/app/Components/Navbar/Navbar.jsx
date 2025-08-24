"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import CommonButton from "../Button/Button";
import { RiLoginCircleFill } from "react-icons/ri";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import SimpleDropdown from "../Dropdown/Dropdown";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/products", text: "Products" },
    ];

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    const { data: session, status } = useSession();
    console.log(session);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="#" className="flex items-center space-x-2">
                                <div className="max-w-[150px] rounded-full flex items-center justify-center">
                                    <img
                                        src="/images/Yellow_Orange_Illustration_Mart_Logo__1_-removebg-preview.png"
                                        alt="QuickMart"
                                    />
                                </div>
                            </a>
                        </div>

                        {/* Nav Links (Desktop) */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.text}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                                >
                                    {link.text}
                                </a>
                            ))}
                            <SimpleDropdown />
                        </nav>

                        {/* Actions (Desktop) */}
                        <div className="hidden md:flex items-center space-x-3">
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>

                            {status === "loading" ? null : !session ? (
                                <Link href={"/login"}>
                                    <CommonButton icon={<RiLoginCircleFill size={20} />}>
                                        Login
                                    </CommonButton>
                                </Link>
                            ) : (
                                <button onClick={() => signOut({ callbackUrl: "/" })}>
                                    <CommonButton icon={<RiLoginCircleFill size={20} />}>
                                        Logout
                                    </CommonButton>
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden z-40 flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                                aria-label="Toggle menu"
                            >
                                <Menu
                                    className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                                        }`}
                                />
                                <X
                                    className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 z-30 bg-black dark:bg-gray-900 flex flex-col items-center justify-center space-y-6">
                        {/* Nav Links */}
                        {navLinks.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                {link.text}
                            </a>
                        ))}
                        <SimpleDropdown />

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                        </button>

                        {/* Auth Button */}
                        {status === "loading" ? null : !session ? (
                            <Link href={"/login"} onClick={() => setIsMenuOpen(false)}>
                                <CommonButton icon={<RiLoginCircleFill size={20} />}>
                                    Login
                                </CommonButton>
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    signOut({ callbackUrl: "/" });
                                    setIsMenuOpen(false);
                                }}
                            >
                                <CommonButton icon={<RiLoginCircleFill size={20} />}>
                                    Logout
                                </CommonButton>
                            </button>
                        )}
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
