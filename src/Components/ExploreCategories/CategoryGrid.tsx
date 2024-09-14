import CategoryGridItem from './CategoryGridItem';

interface CategoryGridProps {
  selectedCategory: keyof typeof dummyData; 
}

const dummyData: { [key: string]: string[] } = {
  Bedroom: ['Bed', 'Wardrobe', 'Nightstand', 'Dresser', 'Mirror', 'Chair'],
  Kitchen: ['Table', 'Chair', 'Stool', 'Cabinet', 'Shelf', 'Oven'],
  LivingRoom: ['Sofa', 'TV Stand', 'Coffee Table', 'Bookshelf', 'Armchair', 'Lamp'],
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ selectedCategory }) => {
  const gridItems = dummyData[selectedCategory] || []; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item, index) => (
        <CategoryGridItem key={index} title={item} active={true} />
      ))}
    </div>
  );
};

export default CategoryGrid;
