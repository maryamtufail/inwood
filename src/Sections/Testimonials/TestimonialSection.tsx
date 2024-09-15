import TestimonialSlider from '@/Components/Testimonials/TestimonialSlider';

const TestimonialSection: React.FC = () => {
  return (
    <section>
      <div className="mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-4">Testimonials</h2>
        <p className="text-xl lg:text-2xl mb-8">Over 15,000 happy customers.</p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
