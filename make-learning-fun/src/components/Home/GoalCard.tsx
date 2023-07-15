import React from 'react';

interface GoalCardProps {
  image: string;
  goal: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ image, goal }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow hover:shadow-2xl transition-shadow duration-300 h-80 px-10 w-1/5">
        <div className='cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className="aspect-w-3 aspect-h-2 w-full">
        <img src={image} alt="Goal" className="object-cover rounded-t-lg" />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p className="text-center">{goal}</p>
      </div>
      </div>
    </div>
  );
};

export default GoalCard;
