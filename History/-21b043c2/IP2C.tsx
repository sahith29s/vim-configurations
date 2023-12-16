import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" mt-2 bg-gray-800 text-white">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center">
                    <div className="w-1/3">
                        <h3 className="text-2xl font-bold">Sahith</h3>
                        {/* <p>Web Developer & Designer</p> */}
                        {/* Add social media icons and links if applicable */}
                        <div className="flex space-x-4 mt-4">
                            <Link to="" target="_blank" rel="noopener noreferrer">

                                <FontAwesomeIcon icon={faLinkedin} color='white' className="h-8 hover:opacity-70 duration-150 hover:scale-90" />
                            </Link>
                            <Link to="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} color='white' className="h-8 hover:opacity-70 duration-150 hover:scale-90" />
                                {/* <i className="fab fa-linkedin"></i> */}
                            </Link>
                            <Link to="" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                                <FontAwesomeIcon icon={faInstagram} color='white' className="h-8 hover:opacity-70 duration-150 hover:scale-90" />

                            </Link>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <ul className="flex justify-end space-x-8">
                            <li>
                                <a href="#home" className="hover:text-gray-400">
                                    Home
                                </a>
                                <Link to="/" className="hover:text-gray-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-400">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Sahith. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
