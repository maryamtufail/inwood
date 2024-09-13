
import Layout from './Layout';
import Banner from './Components/Banner/Banner';
import ExploreSection from './Components/ExploreCategories/ExploreSection';
import Benefits from './Components/Benefits/Benefits';
import TestimonialSection from './Components/Testimonials/TestimonialSection';
import Product from './Components/PopularProducts/Product';
import News from './Components/News/News';
import Creation from './Components/Creation/Creation';
import SpecialPackage from './Components/SpecialPackage/SpecialPackage';


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
