import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-1">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
