import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Website Info */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold text-white mb-2">Plantify</h1>
                    <p className="text-gray-400">© 2025 Plantify. All rights reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="mb-6 md:mb-0">
                    <h2 className="font-semibold text-white mb-2">Contact</h2>
                    <p>Email: contact@plantopia.com</p>
                    <p>Phone: +8801864154680</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="font-semibold text-white mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors"
                        >
                            <FaFacebookF />
                        </a>
                        
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-pink-500 rounded-full hover:bg-pink-400 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;