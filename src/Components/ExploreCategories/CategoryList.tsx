import { useFetchCategory } from '@/hooks/useFetchCategory';
import CategoryItem from './CategoryItem';

interface CategoryListProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { data: categories = [], isLoading, isError } = useFetchCategory();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories</div>;

  return (
    <div className="flex flex-col lg:flex-row xl:flex-col xl:space-y-12 flex-wrap pt-8 lg:w-[520px] justify-center">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          active={category.name === selectedCategory}
          onClick={() => onSelectCategory(category.name)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
