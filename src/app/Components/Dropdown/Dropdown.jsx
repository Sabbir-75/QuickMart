"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, ReactNode } from "react";
const ChevronDown = props => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9" />
</svg>;
const File = props => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
</svg>;
const Edit = props => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
</svg>;
const Trash = props => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>;
const DropdownMenu = ({
    children,
    trigger
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleTriggerClick = e => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    return <div className="relative inline-block text-left" ref={dropdownRef}>
        <div onClick={handleTriggerClick} className="cursor-pointer">
            {trigger}
        </div>
        {isOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-1" role="menu" aria-orientation="vertical">
            {children}
        </div>}
    </div>;
};
const DropdownMenuItem = ({
    children,
    onClick
}) => <Link href="/addproduct" className="text-zinc-700 dark:text-zinc-300 group flex items-center px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150" role="menuitem">
        {children}
    </Link>;
const DropdownMenuSeparator = () => <div className="my-1 h-px  dark:bg-zinc-700" />;
export default function SimpleDropdown() {
    return <div className="font-sans">
        <DropdownMenu trigger={
            <button className="inline-flex items-center py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 focus:outline-none hover:text-primary transition-colors">
                Dashboard
                <ChevronDown className="ml-2 h-4 w-4" />
            </button>


        }>
           
            <DropdownMenuItem>
                <Edit className="mr-3 h-4 w-4 text-zinc-500" />
                Add product
            </DropdownMenuItem>
   
        <DropdownMenuSeparator />
    </DropdownMenu>
    </div >;
}