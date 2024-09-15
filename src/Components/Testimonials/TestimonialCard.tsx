import { Testimonial } from '@/types/api';

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <div className="py-8 px-10 flex md:flex-row flex-col items-center gap-12 max-w-full w-full mx-auto">
      <div className="md:basis-1/3 basis-full">
        <div
          style={{ backgroundImage: `url(${testimonial.avatar})` }}
          className="min-h-64 min-w-56 rounded-md bg-center bg-cover flex items-center justify-center"
        ></div>
      </div>
      <div className="text-left md:basis-2/4 lg:px-12 basis-full">
        <img
          src="./images/testimonial/quote.svg"
          alt="quote"
          className="absolute top-0 left-0 w-24 h-24"
        />
        <p className="text-lg sm:text-2xl text-gray-600 mb-14 leading-relaxed">
          {testimonial.qoute}
        </p>
        <div>
          <h4 className="text-xl font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
