import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
}) => {
  return (
    <div className="bg-white py-8 px-10 flex md:flex-row flex-col items-center gap-12 max-w-full w-full mx-auto">
      <div className='md:basis-1/3 basis-full'>
        <div className="min-h-64 min-w-56 bg-gray-300 rounded-md"></div>
      </div>
      {/* testimonial Text */}
      <div className='text-left md:basis-2/4 lg:px-12 basis-full'>
      <img
          src="./images/testimonial/quote.svg"
          alt="quote"
          className="absolute top-0 left-0 w-12 h-12"
        />
        <p className="text-lg sm:text-2xl text-gray-600 mb-14 leading-relaxed">
          {quote}
        </p>
        <div>
          <h4 className="text-xl font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;