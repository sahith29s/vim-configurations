// NameModal.js

import React, { useState } from 'react';

const NameModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the entered name, e.g., send it to a

        // Close the modal after submitting
        onClose();
    };

    return (
        // Use conditional rendering to show/hide the modal
        <div
            className={`fixed inset-0 z-10 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'
                }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto z-20">
                <h2 className="text-2xl font-semibold mb-4">Enter Your Name</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                    />

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NameModal;
