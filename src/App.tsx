
import Layout from '@/Layout';
import Banner from '@/Sections/Banner/Banner';
import ExploreSection from '@/Sections/ExploreCategories/ExploreSection';
import Benefits from '@/Sections/Benefits/Benefits';
import TestimonialSection from '@/Sections/Testimonials/TestimonialSection';
import Product from '@/Sections/PopularProducts/Product';
import News from '@/Sections/News/News';
import Creation from '@/Sections/Creation/Creation';
import SpecialPackage from '@/Sections/SpecialPackage/SpecialPackage';


function App() {
  return (
    
      <Layout>
        <Banner />
        <ExploreSection />
        <Product />
        <SpecialPackage />
        <Creation />
        <Benefits />
        <TestimonialSection />
        <News />
      </Layout>
  
  );
}

export default App;
