import React from 'react';

const CommonButton = ({icon, children }) => {
    return (
        <div className="relative items-center cursor-pointer justify-start inline-block px-4.5 py-2.5 overflow-hidden font-bold rounded-lg group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 "></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-white">
                <div className='flex items-center gap-2'>
                    {icon}{children}
                </div>
            </span>
            <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
        </div>
    );
};

export default CommonButton;