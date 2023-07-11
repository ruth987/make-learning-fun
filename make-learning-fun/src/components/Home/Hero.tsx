import React from 'react';
import fl from '../../assets/funlearning.svg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-purple-100">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center px-6">
          Make Learning Fun
        </h1>
        <button
          type="button"
          className="text-purple-700 bg-transparent hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-6 py-3 text-center border-2 border-purple-700"
        >
          Get Started
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <div className="w-1/2">
        <img className="h-screen object-cover" src={fl} alt="Fun Learning" />
      </div>
      <div className="absolute inset-0 bg-white bg-opacity-50">
        {/* Add the blurred circles background here */}
      </div>
    </div>
  );
}

export default Hero;
