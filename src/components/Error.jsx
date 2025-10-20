import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 px-6 text-center">

            {/* Big 404 text */}
            <h1 className="text-9xl font-extrabold text-green-800 mb-6 animate-bounce">
                404
            </h1>

            {/* Message */}
            <p className="text-2xl md:text-3xl font-semibold text-green-900 mb-4">
                Oops! Page Not Found
            </p>
            <p className="text-green-800 mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Illustration */}
            <img
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/404-plant_dribbble.gif"
                alt="404 illustration"
                className="w-64 md:w-96 mb-8"
            />

            {/* Button to go home */}
            <Link
                to="/"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;