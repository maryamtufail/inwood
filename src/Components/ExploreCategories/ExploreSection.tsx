import { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';
import MobileCategoryDrawer from './MobileCategoryDrawer';
import CategoryGrid from './CategoryGrid';
import { ArrowRightIcon, MenuIcon } from '@heroicons/react/solid';

const ExploreSection: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Bedroom'); 

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div id="categories" className="flex flex-col items-center px-4 py-8 lg:px-8 lg:py-24 w-full">
      <h2 className="lg:pb-12 text-3xl lg:text-4xl font-bold mb-8 text-center ">
        Explore by Category
      </h2>

      <section className="flex flex-col lg:flex-col xl:flex-row justify-between items-center xl:gap-8 max-w-7xl w-full">
        {/* SearchBar and Category list for desktop */}
        <div className="hidden lg:flex lg:flex-col xl:block xl:w-1/4 max-w-3xl mb-8 xl:mb-0 xl:space-y-8 items-center">
          <SearchBar />
          <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          <button className="mt-8 px-12 py-7 bg-teal-600 text-white rounded-lg text-sm lg:text-base flex items-center justify-center">
            All Categories
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* SearchBar and Hamburger Icon for mobile */}
        <div className="lg:hidden w-full sm:flex justify-center items-center mb-8">
          <div className="flex items-center justify-between w-full">
            <SearchBar />
            <button className="ml-4 p-2 focus:outline-none" onClick={toggleDrawer}>
              <MenuIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Category grid */}
        <div className="xl:w-3/4 w-full">
          <CategoryGrid selectedCategory={selectedCategory} />
        </div>

        {/* Side-over drawer for categories on mobile */}
        <MobileCategoryDrawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen}>
          <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </MobileCategoryDrawer>
      </section>
    </div>
  );
};

export default ExploreSection;
