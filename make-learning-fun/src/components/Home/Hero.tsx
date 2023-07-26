import React from 'react';
import { Link } from 'react-router-dom';
import HeroCard from './HeroCard';
import HeroCard2 from './HeroCard2';
import svg1 from '../../assets/bts9.svg';
import svg2 from '../../assets/flashcards.svg';

const Hero: React.FC = () => {
  return (
    <div className=" py-80 flex flex-col items-center justify-center bg-cover bg-center bg-svg-image h-screen">
      <h1 className="text-4xl font-bold  mb-8 text-center font-mono text-purple-950">Unleash Your Curiosity and Embrace Fun Learning with MakeLearning Fun!</h1>
      <Link to="/signup" >
      <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none 
      focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl text-gray-200 px-5 py-2.5 text-center mb-2
       dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-64 h-14">
        Get Started
        </button>
      </Link>
      <div className="flex mt-8 space-x-4">
        <div className="w-1/2 bg-white rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          <HeroCard image= {svg1} goal= "" />
        </div>
        <div className="w-1/2 bg-white rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          <HeroCard2 image= {svg2} goal= "Unlimited Study Resources" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
