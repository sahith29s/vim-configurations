import React from 'react';

import photo from '../assets/photo.png'; // Import your student image

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 min-h-screen">
            <header className="bg-green-500 text-white text-center py-8">
                <h1 className="text-4xl font-extrabold tracking-wider">About Us</h1>
            </header>

            <section className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet Our Student</h2>

                <div className="flex flex-col md:flex-row mb-6">
                    <div className="md:w-1/2 md:mr-4">
                        <img src={StudentImage} alt="Student" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">John Doe</h3>
                        <p className="text-gray-700 leading-loose">
                            Hi, I'm John, a proud student at Class 11. Every day, I walk through the doors of our school with excitement and curiosity, ready to embark on a new learning adventure. The supportive environment and dedicated educators at Class 11 have fueled my passion for knowledge and encouraged me to explore beyond textbooks.
                        </p>
                        <p className="text-gray-700 leading-loose">
                            Class 11 is not just a school; it's a second home where I've built lasting friendships and discovered my interests. From engaging lessons to fun extracurricular activities, every aspect of Class 11 contributes to my growth and development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Add more sections for "What Sets Us Apart," "Join Us on the Journey," and the footer */}

            <footer className="bg-gray-200 text-center py-4 mt-8">
                <p className="text-gray-700">
                    Thank you for being a part of the Class 11 family!
                </p>
            </footer>
        </div>
    );
};

export default AboutUs;
