import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center">
                    <div className="w-1/3">
                        <h3 className="text-2xl font-bold">Sahith</h3>
                        {/* <p>Web Developer & Designer</p> */}
                        {/* Add social media icons and links if applicable */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <ul className="flex justify-end space-x-8">
                            <li>
                                <a href="#home" className="hover:text-gray-400">
                                    Home
                                </a>
                            </li>
                            {/* <li>
                                <a href="#portfolio" className="hover:text-gray-400">
                                    Portfolio
                                </a>
                            </li> */}
                            <li>
                                <a href="#about" className="hover:text-gray-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-gray-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Your Portfolio. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
