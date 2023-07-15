import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Goals from '../components/Home/Goals'
import TestimonialList from '../components/Home/TestimonialList';
import Footer from '../components/Home/Footer'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    quote: 'The MakeLearning Fun platform has completely transformed my learning experience. It made studying enjoyable and engaging!',
    image: '/path/to/john-doe-image.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    quote: "I've never been so excited about learning until I started using MakeLearning Fun. It's a game-changer!",
    image: '/path/to/jane-smith-image.jpg',
  },
  // Add more testimonials as needed
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
      <Features />
      <TestimonialList testimonials={testimonials} />
      <Footer />
    </div>
  )
}

export default HomePage
