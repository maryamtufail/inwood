import { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';
import MobileCategoryDrawer from './MobileCategoryDrawer';
import CategoryGrid from './CategoryGrid';
import Tabs from './Tabs';
import { ArrowRightIcon, MenuIcon } from '@heroicons/react/solid';

const ExploreSection: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 lg:px-8 lg:py-24 w-full">
      <h2 className="lg:pb-12 text-3xl lg:text-4xl font-bold mb-8 text-gray-800 text-center ">
        Explore by Category
      </h2>

      {/* SearchBar and Tabs for medium screens */}
      <div className="hidden lg:hidden md:flex flex-col items-center md:space-y-4 mb-12">
        <SearchBar />
        <Tabs />
        <button className="mt-8 py-7 px-12  bg-teal-600 text-white rounded-lg text-sm lg:text-base flex items-center justify-center">
          All Categories
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </button>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center lg:gap-8 max-w-7xl w-full">
        {/* SearchBar and Category list for desktop */}
        <div className="hidden lg:block lg:w-1/4 w-full mb-8 lg:mb-0 space-y-8">
          <SearchBar />
          <CategoryList />
        </div>

        {/* SearchBar and Hamburger Icon for mobile */}
        <div className="md:hidden w-full flex justify-center items-center mb-8">
          <div className="flex items-center justify-between w-full">
            <SearchBar />
            <button
              className="ml-4 p-2 focus:outline-none"
              onClick={toggleDrawer}
            >
              <MenuIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right side: Category grid */}
        <div className="lg:w-3/4 w-full">
          <CategoryGrid />
        </div>

        {/* Side-over drawer for categories on mobile */}
        <MobileCategoryDrawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen}>
          <CategoryList />
        </MobileCategoryDrawer>
      </section>
    </div>
  );
};

export default ExploreSection;
