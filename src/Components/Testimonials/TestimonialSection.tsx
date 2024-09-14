import TestimonialSlider from './TestimonialSlider';

const TestimonialSection: React.FC = () => {
  return (
    <section className="my-12 py-12">
      <div className="mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-4">Testimonials</h2>
        <p className="text-xl lg:text-2xl mb-8">Over 15,000 happy customers.</p>

        {/* testimonial slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
