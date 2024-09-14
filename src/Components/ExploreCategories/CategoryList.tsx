import CategoryItem from './CategoryItem';

interface CategoryListProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    'Bedroom',
    'Dining Room',
    'Meeting Room',
    'Workspace',
    'Living Room',
    'Kitchen',
    'Living Space',
  ];

  return (
    <div className="flex flex-col lg:flex-row xl:flex-col xl:space-y-12 flex-wrap pt-8 lg:w-[520px] justify-center">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          name={category}
          active={category === selectedCategory}
          onClick={() => onSelectCategory(category)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
