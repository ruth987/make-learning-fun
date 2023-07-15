import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

interface TestimonialListProps {
  testimonials: Testimonial[];
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials }) => {
  return (
    <>
    <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
    <div className="grid gap-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          quote={testimonial.quote}
          image={testimonial.image}
        />
      ))}
    </div>
    </>
  );
};

export default TestimonialList;
