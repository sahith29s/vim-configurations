import React from 'react';
// import EducatorsImage from './images/educators.jpg'; // Import your images

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 min-h-screen">
            <header className="bg-green-500 text-white text-center py-8">
                <h1 className="text-4xl font-extrabold tracking-wider">About Us</h1>
            </header>

            <section className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-loose">
                    At Class 11, we are on a mission to create a dynamic and inclusive learning environment that empowers students to explore, discover, and excel academically...
                </p>
            </section>

            <section className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Who We Are</h2>

                <div className="flex flex-col md:flex-row mb-6">
                    <div className="md:w-1/2 md:mr-4">
                        <img src="" alt="Dedicated Educators" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">Dedicated Educators</h3>
                        <p className="text-gray-700 leading-loose">
                            Our team of dedicated educators is committed to providing high-quality education and guidance to our students...
                        </p>
                    </div>
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
