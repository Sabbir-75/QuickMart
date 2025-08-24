import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 py-6 md:py-12 lg:py-16'>
            {children}
        </div>
    );
};

export default Container;