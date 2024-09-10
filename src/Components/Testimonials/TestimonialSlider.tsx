import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote:
      '"My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you."',
    author: 'Leona Paul',
    position: 'CEO of Floatcom',
  },
  {
    quote:
      '"Great service and amazing selection of products. The store is always clean, and I love the purchasing experience."',
    author: 'John Doe',
    position: 'Manager at Retail Inc',
  },
  // Add more testimonials
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-[80%] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${100 * currentSlide}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none w-full">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            </div>
          ))}
        </div>
      </div>

      {/* navigation */}
      <div className="absolute inset-y-0 right-0 hidden lg:flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-blue-100 p-3 rounded-full text-blue-500"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          className="bg-red-100 p-3 rounded-full text-red-500"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;