import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { useFetchTestimonial } from '../../hooks/useFetchTestimonial';

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data, error, isLoading } = useFetchTestimonial();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const nextSlide = () => {
    if (data) {
      setCurrentSlide((prev) => (prev - 1) % data.testimonials.length);
    }
  };

  const prevSlide = () => {
    if (data) {
      setCurrentSlide(
        (prev) =>
          (prev + 1 + data.testimonials.length) % data.testimonials.length
      );
    }
  };

  return (
    <div className="relative max-w-[80%] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${100 * currentSlide}%)` }}
        >
          {data?.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-none w-full">
              <TestimonialCard testimonial={testimonial} />
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
