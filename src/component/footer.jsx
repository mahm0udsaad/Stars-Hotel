import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Stay Connected</h2>
            <p className="mt-2">Subscribe to our newsletter for the latest updates.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.75 16.25a4.75 4.75 0 100-9.5 4.75 4.75 0 000 9.5zM23 12h-2.24l-1.76-2.97M18.76 6.53a9 9 0 00-12.98 0M1 1l22 22"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 2C5.13 2 2 5.13 2 9m20-7a9.97 9.97 0 01-2.84 7A9.93 9.93 0 0117 19.01M17 19.01H7M2 12h15"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-800 my-4" />
        <p className="text-center text-gray-500">&copy; 2023 Luxury Retreat Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;