import React from 'react';

const Spinner = ({ size = "w-12 h-12", color = "border-green-500" }) => {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <div
                className={`animate-spin rounded-full border-4 border-t-4 border-gray-200 ${color} ${size}`}
            ></div>
        </div>
    );
};

export default Spinner;