import { ReactNode } from 'react';
import { XIcon } from '@heroicons/react/outline';

interface MobileCategoryDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

const MobileCategoryDrawer: React.FC<MobileCategoryDrawerProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={`fixed inset-0 z-10 bg-gray-900 bg-opacity-25 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div
        className={`w-80 max-w-sm h-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button
            className="h-6 w-6 text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="p-4">{children}</div>
      </div>
      <div className="fixed inset-0 bg-transparent" onClick={() => setIsOpen(false)} />
    </div>
  );
};

export default MobileCategoryDrawer;
