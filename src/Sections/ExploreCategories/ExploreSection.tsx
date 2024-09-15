import { useState } from 'react';
import SearchBar from '@/Components/ExploreCategories/SearchBar';
import CategoryList from '@/Components/ExploreCategories/CategoryList';
import MobileCategoryDrawer from '@/Components/ExploreCategories/MobileCategoryDrawer';
import CategoryGrid from '@/Components/ExploreCategories/CategoryGrid';
import { ArrowRightIcon, MenuIcon } from '@heroicons/react/solid';

const ExploreSection: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Bedroom');

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <section
      id="categories"
      className="flex flex-col items-center px-4 py-8 lg:px-8 lg:py-24 w-full"
    >
      <h2 className="lg:pb-12 text-3xl lg:text-4xl font-bold mb-8 text-center">
        Explore by Category
      </h2>

      <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-center xl:gap-8 max-w-7xl w-full">
        <div className="hidden lg:flex lg:flex-col xl:block xl:w-1/4 max-w-3xl mb-8 xl:mb-0 xl:space-y-8 items-center">
          <SearchBar />
          <CategoryList
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <button className="mt-8 px-12 py-7 bg-secondary text-textSecondary rounded-lg text-sm lg:text-base flex items-center justify-center">
            All Categories
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="lg:hidden w-full sm:flex justify-center items-center mb-8">
          <div className="flex items-center justify-between w-full">
            <SearchBar />
            <button
              className="ml-4 p-2 focus:outline-none"
              onClick={toggleDrawer}
            >
              <MenuIcon className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>

        <div className="xl:w-3/4 w-full">
          <CategoryGrid selectedCategory={selectedCategory} />
        </div>

        <MobileCategoryDrawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen}>
          <CategoryList
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </MobileCategoryDrawer>
      </div>
    </section>
  );
};

export default ExploreSection;
