import { ReactNode } from "react";
import { XIcon } from '@heroicons/react/outline';


interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
    return (
        <div
            className={`fixed inset-0 z-10 bg-opacity-25 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
            <div
                className={`w-80 max-w-sm h-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <header className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <img
                            className="h-10 lg:hidden"
                            src="/images/logo.png"
                            alt="Crypto Logo"
                        />
                    </div>
                    <XIcon
                        className="h-6 w-6 text-gray-900 cursor-pointer" 
                        onClick={() => setIsOpen(false)} 
                        aria-label="Close drawer"
                    />
                </header>
                <div 
                    className="flex-1 overflow-y-auto p-4"
                    onClick={() => setIsOpen(false)}
                >
                    {children}
                </div>
            </div>
            <div 
                className="fixed inset-0 bg-transparent cursor-pointer" 
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
        </div>
    );
}

export default Drawer;
