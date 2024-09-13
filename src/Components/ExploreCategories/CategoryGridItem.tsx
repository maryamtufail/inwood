interface CategoryGridItemProps {
  title: string;
  active?: boolean;
}

const CategoryGridItem: React.FC<CategoryGridItemProps> = ({ title, active = false }) => {
  return (
    <div className={`flex items-center justify-center min-h-[250px] bg-[#d9d9d9] rounded-xl ${active ? "shadow-lg bg-[#8c8b8b]" : "bg-[#d9d9d9]"}`}>
      <div className="text-center">
        <h3 className="text-5xl font-semibold text-white">{title}</h3>
        {active && (
          <button className="mt-7 px-8 py-2 bg-white text-[#4e7778] font-semibold rounded-lg">Explore</button>
        )}
      </div>
    </div>
  );
};

export default CategoryGridItem;