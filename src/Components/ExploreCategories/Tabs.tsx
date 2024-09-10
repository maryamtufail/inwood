const categories = [
  "Bedroom",
  "Dining Room",
  "Meeting Room",
  "Workspace",
  "Living Room",
  "Room Kitchen",
  "Living Space",
];

const Tabs: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-2 border-b-2 border-transparent hover:border-gray-600 text-gray-800 font-medium"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
