import { SearchIcon } from '@heroicons/react/outline';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[56%]">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 text-sm focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
