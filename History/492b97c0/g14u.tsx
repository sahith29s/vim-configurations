import React from 'react';
import './AboutUs.css'; // Import the Tailwind CSS styles

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-green-500 text-white text-center py-4">
                <h1 className="text-3xl font-bold">About Us</h1>
            </header>

            <section className="max-w-3xl mx-auto mt-8 p-4">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    At Class 11, we strive to create a dynamic and inclusive learning environment that empowers students to explore, discover, and excel academically...
                </p>
            </section>

            <section className="max-w-3xl mx-auto mt-8 p-4">
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Dedicated Educators</h3>
                    <p className="text-gray-700">
                        Our team of dedicated educators is committed to providing high-quality education and guidance to our students...
                    </p>
                </div>

                {/* Repeat similar structure for other sections */}
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
