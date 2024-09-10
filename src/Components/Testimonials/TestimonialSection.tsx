import { ArrowRightIcon } from '@heroicons/react/solid';
import TestimonialSlider from './TestimonialSlider';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 bg-white text-[#07484A]">
      <div className="mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-4">Testimonials</h2>
        <p className="text-xl lg:text-2xl mb-8">Over 15,000 happy customers.</p>

        {/* testimonial slider */}
        <TestimonialSlider />

        {/* all reviews link */}
        <div className="mt-12">
          <a
            href="#"
            className="flex items-center justify-center text-lg hover:underline"
          >
            See all reviews <ArrowRightIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;