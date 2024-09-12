import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ExploreSection from './Components/ExploreCategories/ExploreSection';
import Benefits from './Components/Benefits/Benefits';
import TestimonialSection from './Components/Testimonials/TestimonialSection';
import Product from './Components/PopularProducts/Product';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import Creation from './Components/Creation/Creation';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ExploreSection />
      <Product />
      <Creation/>
      <Benefits />
      <TestimonialSection />
      <News />
      <Footer />
    </>
  );
}

export default App;
