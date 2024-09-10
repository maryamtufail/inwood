import CategoryItem from "./CategoryItem";
import { ArrowRightIcon } from "@heroicons/react/solid";

const CategoryList: React.FC = () => {
  const categories = [
    "Bedroom",
    "Dinning Room",
    "Meeting Room",
    "Workspace",
    "Living Room",
    "Kitchen",
    "Living Space",
  ];

  return (
    <div className="flex flex-col space-y-12 pt-8">
      {categories.map((category, index) => (
        <CategoryItem key={index} name={category}  />
      ))}
           <button className="mt-8 py-7 bg-teal-600 text-white rounded-lg text-sm lg:text-base flex items-center justify-center">
        All Categories 
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </button>

    </div>
  );
};

export default CategoryList;