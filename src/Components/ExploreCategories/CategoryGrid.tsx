import { useFetchCategory } from '@/hooks/useFetchCategory';
import CategoryGridItem from './CategoryGridItem';

interface CategoryGridProps {
  selectedCategory: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ selectedCategory }) => {
  const { data: categories = [], isLoading, isError } = useFetchCategory();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories</div>;

  const category = categories.find((cat) => cat.name === selectedCategory);
  const gridItems = category?.items || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridItems.map((item) => (
        <CategoryGridItem
          key={item.id}
          image={item.image}
          title={item.name}
          active={true}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
