// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 p-4">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between">
//                     <div className="text-white font-bold text-xl">Your Name</div>
//                     <div className="space-x-4">
//                         <a href="#" className="text-white">Home</a>
//                         <a href="#" className="text-white">About</a>
//                         <a href="#" className="text-white">Projects</a>
//                         <a href="#" className="text-white">Contact</a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Your Name</div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Projects</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
