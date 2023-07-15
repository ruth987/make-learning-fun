import React from 'react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={image} alt="User" className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
        </div>
      </div>
      <p className="text-gray-600">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
