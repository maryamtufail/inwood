interface CategoryItemProps {
  name: string;
  active?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, active = false }) => {
  return (
    <div
      className={`relative py-2 px-4 cursor-pointer transition-all duration-300 ${
        active
          ? "font-bold text-teal-600 border-l-4 border-teal-600"
          : "text-gray-500 hover:text-teal-600"
      }`}
    >
      {name}
      
    </div>
  );
};

export default CategoryItem;