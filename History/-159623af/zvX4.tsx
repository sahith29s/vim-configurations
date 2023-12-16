// import { faX } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative inline-block text-left">
//             <button
//                 onClick={toggleDropdown}
//                 type="button"

//                 className="text-white h-[3rem] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 font-amita mt-5 mb-2"

//                 id="options-menu"
//                 aria-haspopup="true"
//                 aria-expanded="true"
//             >
//                 Web apps that you can use
//             </button>

//             {isOpen && (
//                 <>
//                     <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                         {/* Dropdown content goes here */}


//                         <FontAwesomeIcon onClick={() => setIsOpen(false)} className="text-[.5rem] clear-both p-1 border-2 rounded-[20rem] px-[.4rem] cursor-pointer duration-150 hover:bg-gray-100 m-[.2rem] float-right" icon={faX} />
//                         <Link
//                             to="/chat"
//                             className="block px-4 clear-both py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                         >
//                             Chat App
//                         </Link>

//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Dropdown;


// src/components/Dropdown.js

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
                Options
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="py-1">
                        <Link
                            to="/option1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 1
                        </Link>
                        <Link
                            to="/option2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 2
                        </Link>
                        <Link
                            to="/option3"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 3
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
