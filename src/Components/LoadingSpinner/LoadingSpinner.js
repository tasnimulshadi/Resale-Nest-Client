import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='h-96 flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary-focus"></div>
        </div>
    );
};

export default LoadingSpinner;