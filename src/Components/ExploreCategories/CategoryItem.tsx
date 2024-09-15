interface CategoryItemProps {
  name: string;
  active?: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, active = false, onClick }) => {
  return (
    <div
      className={`relative py-2 px-4 cursor-pointer transition-all duration-300 ${
        active
          ? 'font-bold text-textPrimary  border-primary'
          : 'text-accent hover:text-textSecondary'
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default CategoryItem;
