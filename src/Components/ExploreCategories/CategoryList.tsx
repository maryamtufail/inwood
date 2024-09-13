import CategoryItem from './CategoryItem';

const CategoryList: React.FC = () => {
  const categories = [
    'Bedroom',
    'Dinning Room',
    'Meeting Room',
    'Workspace',
    'Living Room',
    'Kitchen',
    'Living Space',
  ];

  return (
    <div className="flex flex-col lg:flex-row xl:flex-col xl:space-y-12 flex-wrap pt-8 lg:w-[520px] justify-center">
      {categories.map((category, index) => (
        <CategoryItem key={index} name={category} />
      ))}
    </div>
  );
};

export default CategoryList;