import CategoryGridItem from "./CategoryGridItem";

const CategoryGrid: React.FC = () => {
  const gridItems = [
    { title: "Bedroom", active: true },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {gridItems.map((item, index) => (
        <CategoryGridItem key={index} title={item.title} active={item.active} />
      ))}
    </div>
  );
};

export default CategoryGrid;