import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ExploreSection from './Components/ExploreCategories/ExploreSection';
import Benefits from './Components/Benefits/Benefits';
import TestimonialSection from './Components/Testimonials/TestimonialSection';
import Product from './Components/PopularProducts/Product';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ExploreSection />
      <Product/>
      <Benefits/>
      <TestimonialSection/>
    </>
  );
}

export default App;
